let headerImg = document.querySelector('.header_img')
let spans = document.querySelectorAll('.progress span')
let htmlPr = document.querySelector('.htmlpr')
let cssPr = document.querySelector('.csspr')
let jsPr = document.querySelector('.jspr')


let firstBtn = document.querySelector('.slider-btn-1')
let secondBtn = document.querySelector('.slider-btn-2')
let thirdBtn = document.querySelector('.slider-btn-3')
let fourBtn = document.querySelector('.slider-btn-4')

let slideFirst = document.querySelector('.slide')
let slideSecond =document.querySelector('.slide-2')
let slideThird = document.querySelector('.slide-3')
let slideFourth = document.querySelector('.slide-4')

let slides = document.querySelector('.img')  

window.onscroll = function (){
  if (window.scrollY >= headerImg.offsetTop){
    spans.forEach((span)=>{
      span.style.width=span.dataset.width
      htmlPr.style.display = 'inline'
      htmlPr.innerHTML = '(80%)'
      cssPr.style.display = 'inline'
      cssPr.innerHTML = '(70%)'
      jsPr.style.display = 'inline'
      jsPr.innerHTML = '(50%)'
    })
  }else{
    htmlPr.style.display =''
    cssPr.style.display = ''
    jsPr.style.display = ''
  }
}
slideFirst.classList.add('active')

const name = document.querySelector('.my_name')
const profession = document.querySelector('.profession')
const infoAboutMe = document.querySelector('.info_about_me')
function renderSlider() {
  secondBtn.addEventListener('click',()=>{
    slideSecond.classList.add('active')
    slideFirst.classList.remove('active')
    slideThird.style.display = 'none'
    slideFirst.style.display = 'none'
    slideFourth.style.display = 'none'
    slideSecond.style.display = 'block'
    name.innerHTML = 'Moiz Amir Ali'
  })
  thirdBtn.addEventListener('click',()=>{
    slideThird.classList.add('.active')
    slideSecond.classList.remove('active')
    slideThird.style.display = 'block'
    slideFourth.style.display = 'none'
    slideFirst.style.display = 'none'
    slideSecond.style.display = 'none'
    name.innerHTML = 'Tamal Sen'
  })
  fourBtn.addEventListener('click',()=>{
    slideFourth.classList.add('.active')
    slideThird.classList.remove('active')
    slideFourth.style.display = 'block'
    slideFirst.style.display = 'none'
    slideThird.style.display = 'none'
    slideSecond.style.display = 'none'
    name.innerHTML = 'Othmane Nejdi'
   
  })
  firstBtn.addEventListener('click',()=>{
    slideFirst.classList.add('.active')
    slideThird.classList.remove('active')
    slideFourth.style.display = 'none'
    slideFirst.style.display = 'block'
    slideThird.style.display = 'none'
    slideSecond.style.display = 'none'
    name.innerHTML = 'Goga Mchedlidze'
  })
}
renderSlider()
