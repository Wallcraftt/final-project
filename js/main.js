let header = document.querySelector('header')
let spans = document.querySelectorAll('.progress span')

window.onscroll = function (){
  if (window.scrollY >= header.offsetTop){
    spans.forEach((span)=>{
      span.style.width=span.dataset.width
    })
  }
}