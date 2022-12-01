let headerImg = document.querySelector('.header_img')
let htmlPr = document.querySelector('.htmlpr')
let cssPr = document.querySelector('.csspr')
let jsPr = document.querySelector('.jspr')

let spanFir = document.querySelectorAll('.progress .static')
let spanSec = document.querySelectorAll('.progress .static-2')
let spanTh = document.querySelectorAll('.progress .static-3')
let spanFourth = document.querySelectorAll('.progress .static_4')


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
    spanFir.forEach((spanFir)=>{
      spanFir.style.width=spanFir.dataset.width
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
    spanSec.forEach((spanSec)=>{
      spanSec.style.width=spanSec.dataset.width
      htmlPr.style.display = 'inline'
      htmlPr.innerHTML = '(85%)'
      cssPr.style.display = 'inline'
      cssPr.innerHTML = '(75%)'
      jsPr.style.display = 'inline'
      jsPr.innerHTML = '(55%)'
      spanSec.style.transition = 'width 1.3s linear'
    })
    spanFir.forEach((spanFir)=>{
      spanFir.style.width='0px'
    })
    spanTh.forEach((spanTh)=>{
      spanTh.style.width='0px'
    })
    spanFourth.forEach((spanFourth)=>{
      spanFourth.style.width='0px'
    })
  })
  thirdBtn.addEventListener('click',()=>{
    slideThird.classList.add('.active')
    slideSecond.classList.remove('active')
    slideThird.style.display = 'block'
    slideFourth.style.display = 'none'
    slideFirst.style.display = 'none'
    slideSecond.style.display = 'none'
    name.innerHTML = 'Tamal Sen'
    spanTh.forEach((spanTh)=>{
      spanTh.style.width=spanTh.dataset.width
      htmlPr.style.display = 'inline'
      htmlPr.innerHTML = '(90%)'
      cssPr.style.display = 'inline'
      cssPr.innerHTML = '(80%)'
      jsPr.style.display = 'inline'
      jsPr.innerHTML = '(60%)'
      spanTh.style.transition = 'width 1.3s linear'
    }) 
    spanFir.forEach((spanFir)=>{
      spanFir.style.width='0px'
    })
    spanSec.forEach((spanSec)=>{
      spanSec.style.width='0px'
    })
    spanFourth.forEach((spanFourth)=>{
      spanFourth.style.width='0px'
    })
  })
  fourBtn.addEventListener('click',()=>{
    slideFourth.classList.add('.active')
    slideThird.classList.remove('active')
    slideFourth.style.display = 'block'
    slideFirst.style.display = 'none'
    slideThird.style.display = 'none'
    slideSecond.style.display = 'none'
    name.innerHTML = 'Othmane Nejdi'
    spanFourth.forEach((spanFourth)=>{
      spanFourth.style.width=spanFourth.dataset.width
      htmlPr.style.display = 'inline'
      htmlPr.innerHTML = '(95%)'
      cssPr.style.display = 'inline'
      cssPr.innerHTML = '(80%)'
      jsPr.style.display = 'inline'
      jsPr.innerHTML = '(65%)'
      spanFourth.style.transition = 'width  1.3s linear' 
    })
    spanFir.forEach((spanFir)=>{
      spanFir.style.width='0px'
    })
    spanSec.forEach((spanSec)=>{
      spanSec.style.width='0px'
    })
    spanTh.forEach((spanTh)=>{
      spanTh.style.width='0px'
    })
  })
  firstBtn.addEventListener('click',()=>{
    slideFirst.classList.add('.active')
    slideThird.classList.remove('active')
    slideFourth.style.display = 'none'
    slideFirst.style.display = 'block'
    slideThird.style.display = 'none'
    slideSecond.style.display = 'none'
    name.innerHTML = 'Goga Mchedlidze'
    spanFir.forEach((spanFir)=>{
      spanFir.style.width=spanFir.dataset.width
      htmlPr.style.display = 'inline'
      htmlPr.innerHTML = '(80%)'
      cssPr.style.display = 'inline'
      cssPr.innerHTML = '(70%)'
      jsPr.style.display = 'inline'
      jsPr.innerHTML = '(50%)'
    })
    spanFourth.forEach((spanFourth)=>{
      spanFourth.style.width='0px'
    })
    spanSec.forEach((spanSec)=>{
      spanSec.style.width='0px'
    })
    spanTh.forEach((spanTh)=>{
      spanTh.style.width='0px'
    })
  })
}
renderSlider()


let mockup = document.querySelector('.mockup')
const heartImg = document.querySelector('.heart_img')
const lastOnlineMockupDesign = document.querySelector('.last-online-mockup-design')
const mockupDesign = document.querySelector('.mockup-design')
let all = document.querySelector('.all')
const online = document.querySelector('.online')
const allOurProject = document.querySelector('.all-our-project')
let workIdeas = document.querySelector('.work-ideas')
const lastOnline = document.querySelector('.last-online')
const workIdea = document.querySelector('.work-idea')
let psdDesignBtn = document.querySelector('.psd-design')
const psdDesign = document.querySelector('.psd_design')
const lastOnlinePsdDesign = document.querySelector('.last-online-psd-design')
let logoBtn = document.querySelector('.logo-btn')
const lastLogo = document.querySelector('.last-logo')
const logo = document.querySelector('.logo')
let presentationBtn = document.querySelector('.presentation-btn')
const lastPresentation = document.querySelector('.last-presentation')
const presentation  = document.querySelector('.presentation')
let iconbtn =  document.querySelector('.icon-btn')
const lastIcon =  document.querySelector('.last-icon')
const icons  =  document.querySelector('.icon')
let psdDesignImg = document.querySelector('.psd-design-img')
let ideasImg = document.querySelector('.work-img')
let mockupImg = document.querySelector('.mockup_img')
let companyLogo = document.querySelector('.company-logo')
let presentationImg = document.querySelector('.presentation-img')
let iconsImg = document.querySelector('.icons-img')
let presentationLink = document.querySelector('.presentation_link')


all.style.color = '#E93656'
mockup.addEventListener('mouseover', () => {
  heartImg.style.opacity = '1'
  lastOnlineMockupDesign.style.opacity = '1'
  mockupDesign.style.opacity = '1'
  psdDesignImg.style.opacity = '0'
  ideasImg.style.opacity = '0'
  mockupImg.style.opacity = '0'
  companyLogo.style.opacity = '0'
  presentationImg.style.opacity = '0'
  iconsImg.style.opacity = '0'
  presentationLink.style.opacity = '0'
})
mockup.addEventListener('mouseout', () => {
  heartImg.style.opacity = '0'
  lastOnlineMockupDesign.style.opacity = '0'
  mockupDesign.style.opacity = '0'
  psdDesignImg.style.opacity = '1'
  ideasImg.style.opacity = '1'
  mockupImg.style.opacity = '1'
  companyLogo.style.opacity = '1'
  presentationImg.style.opacity = '1'
  iconsImg.style.opacity = '1'
  presentationLink.style.opacity = '1'
})
mockup.addEventListener('click', () => {
  heartImg.style.opacity = '0'
  lastOnlineMockupDesign.style.opacity = '0'
  mockupDesign.style.opacity = '0'
  all.style.color = 'white'
  workIdeas.style.color='white'
  mockup.style.color='#E93656'
  psdDesignBtn.style.color='white'
  logoBtn.style.color='white'
  presentationBtn.style.color='white'
  iconbtn.style.color='white'
  iconsImg.style.display='none' 
  mockupImg.style.display='block' 
  psdDesignImg.style.display='none'
  companyLogo.style.display='none'
  presentationLink.style.display='none'
  ideasImg.style.display='none'
  presentationImg.style.display='none'
})
all.addEventListener('mouseover', () => {
  online.style.opacity = '1'
  heartImg.style.opacity = '1'
  allOurProject.style.opacity = '1'
  psdDesignImg.style.opacity = '0'
  ideasImg.style.opacity = '0'
  mockupImg.style.opacity = '0'
  companyLogo.style.opacity = '0'
  presentationImg.style.opacity = '0'
  iconsImg.style.opacity = '0'
  presentationLink.style.opacity = '0'
})
all.addEventListener('mouseout', () => {
  online.style.opacity = '0'
  heartImg.style.opacity = '0'
  allOurProject.style.opacity = '0'
  psdDesignImg.style.opacity = '1'
  ideasImg.style.opacity = '1'
  mockupImg.style.opacity = '1'
  companyLogo.style.opacity = '1'
  presentationImg.style.opacity = '1'
  iconsImg.style.opacity = '1'
  presentationLink.style.opacity = '1'
})
all.addEventListener('click', () => {
  online.style.opacity = '0'
  heartImg.style.opacity = '0'
  allOurProject.style.opacity = '0'
  online.style.transition='opacity 0.2s ease'
  heartImg.style.transition='opacity 0.2s ease'
  allOurProject.style.transition='opacity 0.2s ease'
  all.style.color = '#E93656'
  workIdeas.style.color='white'
  mockup.style.color='white'
  psdDesignBtn.style.color='white'
  logoBtn.style.color='white'
  presentationBtn.style.color='white'
  iconbtn.style.color='white'
  iconsImg.style.display='block' 
  mockupImg.style.display='block' 
  psdDesignImg.style.display='block'
  companyLogo.style.display='block'
  presentationLink.style.display='block'
  ideasImg.style.display='block'
  presentationImg.style.display='block'
})
workIdeas.addEventListener('mouseover', () => {
  workIdea.style.opacity = '1'
  heartImg.style.opacity = '1'
  lastOnline.style.opacity = '1'
  psdDesignImg.style.opacity = '0'
  ideasImg.style.opacity = '0'
  mockupImg.style.opacity = '0'
  companyLogo.style.opacity = '0'
  presentationImg.style.opacity = '0'
  iconsImg.style.opacity = '0'
  presentationLink.style.opacity = '0'
  
})
workIdeas.addEventListener('mouseout', () => {
  workIdea.style.opacity = '0'
  heartImg.style.opacity = '0'
  lastOnline.style.opacity = '0'
  psdDesignImg.style.opacity = '1'
  ideasImg.style.opacity = '1'
  mockupImg.style.opacity = '1'
  companyLogo.style.opacity = '1'
  presentationImg.style.opacity = '1'
  iconsImg.style.opacity = '1'
  presentationLink.style.opacity = '1'
})
workIdeas.addEventListener('click', () => {
  workIdea.style.opacity = '0'
  heartImg.style.opacity = '0'
  lastOnline.style.opacity = '0'
  workIdea.style.transition='opacity 0.2s ease'
  heartImg.style.transition='opacity 0.2s ease'
  lastOnline.style.transition='opacity 0.2s ease'
  all.style.color = 'white'
  workIdeas.style.color='#E93656'
  mockup.style.color='white'
  psdDesignBtn.style.color='white'
  logoBtn.style.color='white'
  presentationBtn.style.color='white'
  iconbtn.style.color='white'
  iconsImg.style.display='none' 
  mockupImg.style.display='none' 
  psdDesignImg.style.display='none'
  companyLogo.style.display='none'
  presentationLink.style.display='none'
  ideasImg.style.display='block'
  presentationImg.style.display='none'
})
psdDesignBtn.addEventListener('mouseover', () => {
  psdDesign.style.opacity = '1'
  heartImg.style.opacity = '1'
  lastOnlinePsdDesign.style.opacity = '1'
  psdDesignImg.style.opacity = '0'
  ideasImg.style.opacity = '0'
  mockupImg.style.opacity = '0'
  companyLogo.style.opacity = '0'
  presentationImg.style.opacity = '0'
  iconsImg.style.opacity = '0'
  presentationLink.style.opacity = '0'
})
psdDesignBtn.addEventListener('mouseout', () => {
  psdDesign.style.opacity = '0'
  heartImg.style.opacity = '0'
  lastOnlinePsdDesign.style.opacity = '0'
  psdDesignImg.style.opacity = '1'
  ideasImg.style.opacity = '1'
  mockupImg.style.opacity = '1'
  companyLogo.style.opacity = '1'
  presentationImg.style.opacity = '1'
  iconsImg.style.opacity = '1'
  presentationLink.style.opacity = '1'
})
psdDesignBtn.addEventListener('click', () => {
  psdDesign.style.opacity = '0'
  heartImg.style.opacity = '0'
  lastOnlinePsdDesign.style.opacity = '0'
  psdDesign.style.transition='opacity 0.2s ease'
  heartImg.style.transition='opacity 0.2s ease'
  lastOnlinePsdDesign.style.transition='opacity 0.2s ease'
  all.style.color = 'white'
  workIdeas.style.color='white'
  mockup.style.color='white'
  psdDesignBtn.style.color='#E93656'
  logoBtn.style.color='white'
  presentationBtn.style.color='white'
  iconbtn.style.color='white'
  iconsImg.style.display='none' 
  mockupImg.style.display='none' 
  psdDesignImg.style.display='block'
  companyLogo.style.display='none'
  presentationLink.style.display='none'
  ideasImg.style.display='none'
  presentationImg.style.display='none'
})
logoBtn.addEventListener('mouseover', () => {
  lastLogo.style.opacity = '1'
  heartImg.style.opacity = '1'
  logo.style.opacity = '1'
  psdDesignImg.style.opacity = '0'
  ideasImg.style.opacity = '0'
  mockupImg.style.opacity = '0'
  companyLogo.style.opacity = '0'
  presentationImg.style.opacity = '0'
  iconsImg.style.opacity = '0'
  presentationLink.style.opacity = '0'
})
logoBtn.addEventListener('mouseout', () => {
  lastLogo.style.opacity = '0'
  heartImg.style.opacity = '0'
  logo.style.opacity = '0'
  psdDesignImg.style.opacity = '1'
  ideasImg.style.opacity = '1'
  mockupImg.style.opacity = '1'
  companyLogo.style.opacity = '1'
  presentationImg.style.opacity = '1'
  iconsImg.style.opacity = '1'
  presentationLink.style.opacity = '1'
})
logoBtn.addEventListener('click', () => {
  lastLogo.style.opacity = '0'
  heartImg.style.opacity = '0'
  logo.style.opacity = '0'
  lastLogo.style.transition='opacity 0.2s ease'
  heartImg.style.transition='opacity 0.2s ease'
  logo.style.transition='opacity 0.2s ease'
  all.style.color = 'white'
  workIdeas.style.color='white'
  mockup.style.color='white'
  psdDesignBtn.style.color='white'
  logoBtn.style.color='#E93656'
  presentationBtn.style.color='white'
  iconbtn.style.color='white'
  iconsImg.style.display='none' 
  mockupImg.style.display='none' 
  psdDesignImg.style.display='none'
  companyLogo.style.display='block'
  presentationLink.style.display='none'
  ideasImg.style.display='none'
  presentationImg.style.display='none'
})
presentationBtn.addEventListener('mouseover', () => {
  lastPresentation.style.opacity = '1'
  heartImg.style.opacity = '1'
  presentation.style.opacity = '1'
  psdDesignImg.style.opacity = '0'
  ideasImg.style.opacity = '0'
  mockupImg.style.opacity = '0'
  companyLogo.style.opacity = '0'
  presentationImg.style.opacity = '0'
  iconsImg.style.opacity = '0'
  presentationLink.style.opacity = '0'
})
presentationBtn.addEventListener('mouseout', () => {
  lastPresentation.style.opacity = '0'
  heartImg.style.opacity = '0'
  presentation.style.opacity = '0'
  psdDesignImg.style.opacity = '1'
  ideasImg.style.opacity = '1'
  mockupImg.style.opacity = '1'
  companyLogo.style.opacity = '1'
  presentationImg.style.opacity = '1'
  iconsImg.style.opacity = '1'
  presentationLink.style.opacity = '1'
  
})
presentationBtn.addEventListener('click', () => {
  lastPresentation.style.opacity = '0'
  heartImg.style.opacity = '0'
  presentation.style.opacity = '0'
  lastPresentation.style.transition='opacity 0.2s ease'
  heartImg.style.transition='opacity 0.2s ease'
  presentation.style.transition='opacity 0.2s ease'
  all.style.color = 'white'
  workIdeas.style.color='white'
  mockup.style.color='white'
  psdDesignBtn.style.color='white'
  logoBtn.style.color='white'
  presentationBtn.style.color='#E93656'
  iconbtn.style.color='white'
  iconsImg.style.display='none' 
  mockupImg.style.display='none' 
  psdDesignImg.style.display='none'
  companyLogo.style.display='none'
  presentationLink.style.display='block'
  ideasImg.style.display='none'
  presentationImg.style.display='block'
})
iconbtn.addEventListener('mouseover', () => {
  lastIcon.style.opacity = '1'
  heartImg.style.opacity = '1'
  icons.style.opacity = '1'
  psdDesignImg.style.opacity = '0'
  ideasImg.style.opacity = '0'
  mockupImg.style.opacity = '0'
  companyLogo.style.opacity = '0'
  presentationImg.style.opacity = '0'
  iconsImg.style.opacity = '0'
  presentationLink.style.opacity = '0'
})
iconbtn.addEventListener('mouseout', () => {
  lastIcon.style.opacity = '0'
  heartImg.style.opacity = '0'
  icons.style.opacity = '0'
  psdDesignImg.style.opacity = '1'
  ideasImg.style.opacity = '1'
  mockupImg.style.opacity = '1'
  companyLogo.style.opacity = '1'
  presentationImg.style.opacity = '1'
  iconsImg.style.opacity = '1'
  presentationLink.style.opacity = '1'
})
iconbtn.addEventListener('click', () => {
  lastIcon.style.opacity = '0'
  heartImg.style.opacity = '0'
  icons.style.opacity = '0'
  lastIcon.style.transition='opacity 0.2s ease'
  heartImg.style.transition='opacity 0.2s ease'
  icons.style.transition='opacity 0.2s ease'
  all.style.color = 'white'
  workIdeas.style.color='white'
  mockup.style.color='white'
  psdDesignBtn.style.color='white'
  logoBtn.style.color='white'
  presentationBtn.style.color='white'
  iconbtn.style.color='#E93656'
    iconsImg.style.display='block' 
      mockupImg.style.display='none' 
      psdDesignImg.style.display='none'
      companyLogo.style.display='none'
      presentationLink.style.display='none'
      ideasImg.style.display='none'
      presentationImg.style.display='none'
})

const textarea = document.querySelector("textarea");
      textarea.addEventListener("keyup", e =>{
        textarea.style.height = "63px";
        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
      });



const userName = document.querySelector('#user-name') 
const userEmail = document.querySelector('#email')
const website = document.querySelector('#website')
const userMessage = document.querySelector('#message-form')
const sendForm = document.querySelector('#send-form')
const formInfo = document.querySelector('.form_info')



function getAllUser(){
  fetch("https://borjomi.loremipsum.ge/api/all-users")
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
  const users = data.users
  })
}
getAllUser()

formInfo.addEventListener("submit",(e)=>{
  e.preventDefault()

  const userNameValue = userName.value
  const userEmailValue = userEmail.value
  const websiteValue = website.value
  const userMessageValue = userMessage.value

  const newUsers = {
    name: userNameValue,
    email: userEmailValue,
    website:websiteValue,
    message:userMessageValue
  }
  addNewUser(newUsers)
  formInfo.reset()
  console.log(newUsers)
})

function addNewUser(userInfo) {
  fetch('https://borjomi.loremipsum.ge/api/send-message',{
    method: 'POST',
    headers:{'Content-Type': "applicaton/json"},
    body: JSON.stringify(userInfo)
  }).then(res=>res.json())
  .then(data=>{
    console.log(data)
  })
}
