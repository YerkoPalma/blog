---
title: "Hello 2017"
author: Yerko Palma
date: 04-10-2017
tags:
    - planning
    - open-source
    - personal
---
# Hello 2017

Mis objetivos los quería dividir en categorías, pero luego de anotarlos, caí en 
la cuenta de que siempre mis objetivos están mezclando distintos intereses, mis 
intereses. Por lo que decidí solo darles un tag momentáneo, sin categorizar. 
Así que, en general, mis objetivos están marcados por la mezcla de ganas de 
_contribuir a la comunidad mediante la creación de software y código libre._

## Escribir periódicamente.

Tag: Personal. Junto con leer más, pretendo comenzar un blog personal, para ir 
vaciando mis ideas sin sentir que se pierden con el tiempo. En un comienzo 
pretendo escribir sobre desarrollo web y parecidos, pero quién sabe en qué 
termine…

## Crear herramientas propias (gener, viewer, dev stack, etc).

Tags: Oss, learn. En mi búsqueda de un framework para mis desarrollos, he 
pasado por distintas experiencias. Los mejores frameworks que he probado han 
sido Vue y choo, pero ha medida que pasó el tiempo, fui alejándome de ambos 
paulatinamente, por que mis exigencias se fueron complejisando, lo que me hacia 
buscar algo demasiado específico como para encontrarlo en algún framework. Por 
lo que de a poco fui adoptando la idea de desarrollar mis propias herramientas. 
Así, por ejemplo, desarrolle mi propio router fron-end, y eventualmente cuando 
necesito una característica nueva o descubro algún bug, lo voy solucionando, 
como un modulo aparte, también estoy desarrollando una herramienta para generar 
sitios estáticos a partir de archivos en formato markdown. Ambos ejemplos ya 
tienen varias soluciones open-source, pero estos desarrollos son específicos de 
lo que necesito. En base a lo anterior, pienso seguir generando mis herramientas 
especificas, por ahora tengo en mente, un sistema de manejo de templates, más 
sencillo que yeoman, y un visualizador de presentaciones con electron.

## Preocúpate y ocúpate.

Tag: Oss. En algún momento, tuve un diálogo como este.

> – Estoy preocupado por xxxx.
> 
> – Entonces, sólo falta que te ocupes para solucionarlo.

_(La conversación pudo no haber sido exactamente igual)_. No fue la respuesta que 
esperaba, pero fue certera y correcta. Lo interesante de estos conceptos es 
separar dos grandes etapas que son cruciales en la resolución de problemas, la 
identificación de la problemática, ya que te hace reconocer el conflicto y 
estar consciente al respecto, y la acción resolutoria, ya que no existen los 
problemas que se solucionen solos, siempre es necesario tomar un curso de acción.

En mi caso, el problema que identifico es de tipo social, existe, de hecho, una 
serie preocupante de problemas político sociales, y existen, a su vez, una 
serie de medios, un tanto invisibilizados, que pretenden informar y denunciar 
cada una de estas problemáticas. La verdad que esto no es nada nuevo, la parte 
de _preocuparme_ la vengo haciendo desde hace tiempo. Es la segunda etapa que es 
un tanto nueva para mi, y es que he descubierto que existen un montón de grupos 
de personas _ocupándose_ de estos problemas mediante acciones concretas. Por lo 
tanto, ¿Qué es lo que pretendo hacer? Dos aplicaciones; **Preocúpate**, una suerte 
de observatorio de distintas fuentes de prensa e información alternativas, al 
margen de fuentes periodísticas pertenecientes al gobierno y grandes grupos 
económicos. **Ocúpate**, un registro de actividades interactivo, que notifique 
dónde hay eventos de interés relacionados con los problemas y noticias 
informados en preocúpate: tocatas, colectas, clases gratuitas, etc.

## Info senadores.

Tag: Oss. Este es mi segundo (y medio) intento por completar una API lo más 
completa posible sobre la información y actividad de la clase política en mi 
país. Inicialmente, intente abarcar tanto diputados como políticos, e incluir 
tanto el desarrollo de una API, como de aplicaciones para todos los ambientes 
(por SO y plataforma). Hoy, esa organización esta abandonada. Luego, intenté 
enfocarme solo en crear la API, y sólo usar la información de los senadores. 
Este esfuerzo se tradujo en una serie de módulos en NPM. Este año pretendo 
terminar este proyecto, habilitar la información y exponer las actividades de 
nuestros honorables senadores.

## App simulación de país.

Tag: Oss. Básicamente quiero saber qué pasaría si la gente pudiese crear y 
votar por sus propias leyes y dejar de depender de lo que diputados y senadores 
decidan. Actualmente, la constitución de Chile dice, articulo 65, que solo los 
diputados, senadores y presidente de la república pueden levantar un proyecto 
de ley, entonces pensé, ¿y si cualquiera puede levantar una propuesta? ¿qué 
leyes habría?

Soy de los que cree que la baja participación en las votaciones de mi país se 
debe al descontento generalizado, y a que una votación cada 4 años no tiene una 
real incidencia en las políticas publicas de ninguna nación, ya que la 
participación ciudadana es nula, y se confía el destino del país en un grupo de 
personas que no representan ni el 5% de su distrito y que no consultan si 
quiera a sus votantes para tomar decisiones cruciales, como la legalización 
del aborto.

Pensando en eso, se me ocurrió crear un sitio, similar a una red social, con la 
intención de convertir a cada chileno y chilena en un legislador, donde no 
existan restricciones en las leyes ni la constitución para que cualquier 
chileno pueda proponer, votar y/o derogar leyes. Para que esta idea funcione, 
es necesario tener algunas consideraciones:

- Debe existir un mecanismo de (auto)regulación, se me ocurre algo similar a 
como funcionan sitios como StackOverflow, cualquiera puede postear una ley, si 
tiene muchos votos negativos, se descarta inmediatamente, cualquiera puede 
postular correcciones, el o los creadores deben aprobarlas o rechazarlas, si 
tiene un cierto numero de votos positivos, pasa a votación.
- Se debe considerar el estado actual de las leyes, excepto las que prohíben a 
los ciudadanos comunes legislar, incluyendo leyes publicadas y propuestas de ley 
actualmente en el congreso. Para esto, debe haber feedback de la biblioteca 
nacional, o algún otro repositorio con las leyes chilenas.
- Debe existir algún tipo de algoritmo de búsqueda inteligente, redes neuronales 
quizás, que pueda advertir, a quienes postulan nuevas leyes o correcciones a 
leyes, si es que ya existe algo similar en el sistema.
- La autenticación es importante, se debe resolver un método de autenticación de 
cada chileno, mediante rut o numero de pasaporte, que no permita estafas o 
fraudes al sistema.
- Se debe asegurar participación. Este debe ser el punto más difícil de esta 
idea, asegurar quorums representativos, por lo menos para el comienzo, ya que 
el sistema debe permitir ser modificado mediante leyes.

La idea de empoderar a la gente, mezclando herramientas tecnológicas intriga. 
¿Cuáles serán los resultados? ¿Legalizarán el aborto los chilenos?¿Derogaran 
decretos abusivos con el medio ambiente?¿Volverán a la pena de muerte? Este 
experimento debe ser uno de los proyectos de desarrollo que más me emociona de 
este año.

## Donaciones.

Tag: Personal. De a poco voy saliendo de mis obligaciones financieras, así que 
estando más aliviado es momento de retribuir un poco, para disminuir el cargo de 
consciencia. Me queda encontrar iniciativas a las que aportar, por ahora estoy 
pensando en aportar al santuario de la igualdad ínter especie.

## Aprender IoT.

Tag: Learn. Hace tiempo que quiero aprender a usar la raspberri Pi. Tengo 
algunos proyectos en mente, pero quiero partir de a poco.

## Aprender VR.

Tag: Learn. Lo mismo con realidad virtual. Pienso partir aprendiendo a usar 
a-frame, para luego, quizás, trabajar un poco más a bajo nivel.