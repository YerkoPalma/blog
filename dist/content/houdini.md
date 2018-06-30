---
title: "Houdini: PaintWorklet"
author: Yerko Palma
date: 06-10-2018
tags:
    - houdini
    - worklet
    - web
    - css
---
# Houdini: PaintWorklet

En el 2016 los desarrolladores de Google anunciaban una serie de APIs que 
buscaban tomar control de las tareas que hace el CSS por nosotros en nuestras 
páginas. Básicamente, el CSS hace la magia, y con la API de Houdini, los 
desarrolladores podemos ser los magos!

En este articulo espero explicar cómo usar CSS Paint, ya que siendo 2018 y con 
la api de CSSPaint habilitada por defecto desde Chrome 65, aún hay muy poca 
documentación al respecto de su uso.

## CSS Paint API

CSS Paint API, es básicamente un Worklet que nos permite en paralelo pintar un 
elemento del DOM. Ok.

Veamos de nuevo. Vamos a revisar un Worklet ¿Qué es un worklet? Podemos definir 
un worklet como una versión _light_ de un Web Worker, con algunas diferencias 
notables:

- No se ejecutan en el hilo principal de ejecución, por lo que no bloquean al 
cliente. Igual que los web workers.
- Tienen siempre propósitos específicos. A diferencia de los web workers, en 
que se les puede designar casi cualquier función para ejecutar, cada worklet 
esta destinado a un trabajo especifico, es por esto que no se ejecuta un worklet 
directo, sino un paintWorklet, un animationWorklet, etc.
- Tienen distinto scope. El _tradeoff_ de ser más livianos que los web workers 
implica que no tienen acceso a todas las APIs que si tiene acceso un web worker, 
como por ejemplo, no se puede hacer fetch en un worklet.

En general, eso es suficiente respecto a la interfaz de los worklets, ahora 
podemos revisar de forma especifica el PaintWorklet.

## PaintWorklet

Lo mejor para saber cómo son y funcionan los PaintWorklets, es mirar código 
directamente. Primero la instalación

```js
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('gridworklet.js')
}
```

el if es simplemente para asegurar soporte. Si el namespace CSS contiene la 
propiedad paintWorklet, podemos agregar nuestro worklet. La función addModule 
espera de argumento un string con el nombre del archivo que queremos ejecutar, 
este archivo luce así:

```
<div id="target"></div>
<style>
  #target {
    background-image: paint(grid);
    height: 420px;
    width: 680px;
  }
</style>
```

Ahora que estamos usando nuestro worklet, hagamos que efectivamente haga algo!

```js
paint (ctx, geom, properties) {
  var { height, width } = geom
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(width, height)
  ctx.stroke()
}
```

En la primera línea usamos el segundo parametro de la función, que contiene las 
dimensiones del canvas (nuestro div), el resto es dibujar una línea como se 
haria en cualquier canvas. Al ejecutar el código anterior, debiésemos ver una 
linea diagonal en nuestro div.

Ahora, esto sigue sin ser muy interesante. Para hacerlo más útil, vamos a usar 
variables y cambiar de forma dinámica lo que dibuja nuestro worklet. Nuestro 
worklet puede leer propiedades del estilo de nuestro elemento, por lo que 
debemos declararlas ahí primero

```
<style>
  #target {
    --rows: 10;
    --columns: 10;
    background-image: paint(grid);
    height: 420px;
    width: 680px;
  }
</style>
```

También podemos modificar y consultar estas propiedades desde javascript, lo 
que es más útil si queremos cambiar estos valores de forma dinámica. En 
javascript existen varios métodos

```
<script>
  CSS.registerProperty({    // (1)
    name: name,    
    syntax: '<number>',    
    inherits: false,    
    initialValue: '0'
  })
  const target = document.querySelector('#target') // (2)
  target.style.cssText = `--rows: ${rows}; --columns: ${columns};` 
  target.style.setProperty('--rows', rows) // (3)
</script>
```

El primer método (1), sólo sirve para registrar una propiedad, tiene la ventaja 
de que es más flexible y no esta ligado a un elemento en particular, 
permitiendo reutilizar la propiedad. Su principal desventaja es que es muy 
nuevo, hay poca documentación al respecto y menos compatibilidad aún (usando 
Chrome 67 no esta disponible). El segundo y tercer método editan directamente 
el estilo en línea del elemento, el segundo cambia todo el texto (permitiendo 
cambiar varias propiedades a la vez) y el tercero setea una propiedad solamente. 
En mi caso prefiero el tercer metodo.

Bien, ahora usemos estas propiedades en nuestro worklet.

```
registerPaint('grid', class {
  static get inputProperties() {
    return [
      '--rows',
      '--columns'
    ]
  }
  paint (ctx, geom, properties) {
    var rows = properties.get('--rows').toString()
    var columns = properties.get('--columns').toString()
    // ...
  }
})
```

Para poder usarlas, debemos agregarle a nuestra clase un getter que devuelve un 
arreglo con los nombres de las propiedades que vamos a usar, luego, estas 
propiedades estarán disponibles en el tercer parámetro de nuestra función paint.

## Un ejemplo

Para mostrar un ejemplo un poco más practico, he creado un pequeño “editor de 
pixeles” que genera una grilla, y actualiza en base a los clicks del cliente 
una celda. Hay que tener en mente que, cada vez que se cambie el estilo del 
elemento asociado al worklet, se ejecuta nuevamente la función paint, esto 
permite actualizar como se ve la grilla.

![pixel editor](https://cdn-images-1.medium.com/max/1200/1*s_tNkdLa3hWusS36QXz6XQ.gif)

- repo: https://github.com/YerkoPalma/houdini-pixel-editor
- sitio: https://yerkopalma.github.io/houdini-pixel-editor/