/* global HTMLElement */
export default class Loader extends HTMLElement {
  static get observedAttributes () { return ['color', 'bg-color'] }
  get color () {
    return this.getAttribute('color')
  }
  set color (value) {
    this.setAttribute('color', value)
  }
  get bgColor () {
    return this.getAttribute('bg-color')
  }
  set bgColor (value) {
    this.setAttribute('bg-color', value)
  }
  constructor () {
    super()
    const shadow = this.attachShadow({mode: 'open'})
    const style = document.createElement('style')
    const div = document.createElement('div')
    style.textContent = `
     :host > div {
       height: 100vh;
       width: 100%;
       background: ${this.bgColor || '#ed5565'};
       color: ${this.color || '#fff'};
       display: table;
       position: absolute;
       z-index: 10000;
       top: 0;
       left: 0;
     }
     .loader {
       display: table-cell;
       vertical-align: middle;
     }
    @keyframes opacityIn {
      0% {
        opactity: 0; }
      100% {
        opactity: 1; } }
    
    .pacman {
       position: relative;
       width: 0;
       margin: 0 auto;
     }
    .pacman>div:first-of-type,.pacman>div:nth-child(2){width:0;height:0;border-right:25px solid transparent;border-top:25px solid ${this.color || '#fff'};border-left:25px solid ${this.color || '#fff'};border-bottom:25px solid ${this.color || '#fff'};border-radius:25px;position:relative;left:-30px}@-webkit-keyframes rotate_pacman_half_up{0%,100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate_pacman_half_up{0%,100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes rotate_pacman_half_down{0%,100%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes rotate_pacman_half_down{0%,100%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes pacman-balls{75%{opacity:.7}100%{-webkit-transform:translate(-100px,-6.25px);transform:translate(-100px,-6.25px)}}@keyframes pacman-balls{75%{opacity:.7}100%{-webkit-transform:translate(-100px,-6.25px);transform:translate(-100px,-6.25px)}}.pacman{position:relative}.pacman>div:nth-child(3){-webkit-animation:pacman-balls 1s -.66s infinite linear;animation:pacman-balls 1s -.66s infinite linear}.pacman>div:nth-child(4){-webkit-animation:pacman-balls 1s -.33s infinite linear;animation:pacman-balls 1s -.33s infinite linear}.pacman>div:nth-child(5){-webkit-animation:pacman-balls 1s 0s infinite linear;animation:pacman-balls 1s 0s infinite linear}.pacman>div:first-of-type{-webkit-animation:rotate_pacman_half_up .5s 0s infinite;animation:rotate_pacman_half_up .5s 0s infinite}.pacman>div:nth-child(2){-webkit-animation:rotate_pacman_half_down .5s 0s infinite;animation:rotate_pacman_half_down .5s 0s infinite;margin-top:-50px}.pacman>div:nth-child(3),.pacman>div:nth-child(4),.pacman>div:nth-child(5),.pacman>div:nth-child(6){background-color:${this.color || '#fff'};border-radius:100%;margin:2px;width:10px;height:10px;position:absolute;-webkit-transform:translate(0,-6.25px);transform:translate(0,-6.25px);top:25px;left:70px}
    `
    div
    div.innerHTML = '<div class="loader"><div class="pacman"><div></div><div></div><div></div><div></div><div></div></div></div>'
    shadow.appendChild(style)
    shadow.appendChild(div)
  }
  attributeChangedCallback (name, oldValue, newValue) {
    const style = this.shadowRoot.querySelector('style')
    const color = name === 'color' ? newValue : this.color || '#fff'
    const bgColor = name === 'bg-color' ? newValue : this.bgColor || '#ed5565'
    style.textContent = `
     :host > div {
       height: 100vh;
       width: 100%;
       background: ${bgColor};
       color: ${color};
       display: table;
     }
     .loader {
       display: table-cell;
       vertical-align: middle;
     }
    @keyframes opacityIn {
      0% {
        opactity: 0; }
      100% {
        opactity: 1; } }
    
    .pacman {
       position: relative;
       width: 0;
       margin: 0 auto;
     }
    .pacman>div:first-of-type,.pacman>div:nth-child(2){width:0;height:0;border-right:25px solid transparent;border-top:25px solid ${color};border-left:25px solid ${color};border-bottom:25px solid ${color};border-radius:25px;position:relative;left:-30px}@-webkit-keyframes rotate_pacman_half_up{0%,100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate_pacman_half_up{0%,100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes rotate_pacman_half_down{0%,100%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes rotate_pacman_half_down{0%,100%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes pacman-balls{75%{opacity:.7}100%{-webkit-transform:translate(-100px,-6.25px);transform:translate(-100px,-6.25px)}}@keyframes pacman-balls{75%{opacity:.7}100%{-webkit-transform:translate(-100px,-6.25px);transform:translate(-100px,-6.25px)}}.pacman{position:relative}.pacman>div:nth-child(3){-webkit-animation:pacman-balls 1s -.66s infinite linear;animation:pacman-balls 1s -.66s infinite linear}.pacman>div:nth-child(4){-webkit-animation:pacman-balls 1s -.33s infinite linear;animation:pacman-balls 1s -.33s infinite linear}.pacman>div:nth-child(5){-webkit-animation:pacman-balls 1s 0s infinite linear;animation:pacman-balls 1s 0s infinite linear}.pacman>div:first-of-type{-webkit-animation:rotate_pacman_half_up .5s 0s infinite;animation:rotate_pacman_half_up .5s 0s infinite}.pacman>div:nth-child(2){-webkit-animation:rotate_pacman_half_down .5s 0s infinite;animation:rotate_pacman_half_down .5s 0s infinite;margin-top:-50px}.pacman>div:nth-child(3),.pacman>div:nth-child(4),.pacman>div:nth-child(5),.pacman>div:nth-child(6){background-color:${color};border-radius:100%;margin:2px;width:10px;height:10px;position:absolute;-webkit-transform:translate(0,-6.25px);transform:translate(0,-6.25px);top:25px;left:70px}
    `
  }
}