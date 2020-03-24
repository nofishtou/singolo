const headerMenu = document.querySelector('.header-menu');
const headerMenuItems = headerMenu.querySelectorAll('.header-menu-item')
const sections = document.querySelectorAll('main > section')
const headerMenuBtn = document.querySelector('.header-menu-icon-btn')


const adaptiveMenu = () => {
  const headerContainer = document.querySelector('header .container')
  const headerLogo = document.querySelector('.header-logo')
  const shadowBackground = document.querySelector('.shadow-background')
  if(!headerMenu.classList.contains('active')){
    console.log('true')
    headerMenu.classList.toggle('header-menu-active')
    headerMenuBtn.classList.toggle('btn-rotate')
    headerContainer.classList.toggle('change-flex-row')
    headerLogo.classList.toggle('header-logo-position')
    shadowBackground.classList.toggle('shadow-background-active')
  } else {
    headerMenu.classList.toggle('header-menu-active')
    headerMenuBtn.classList.toggle('btn-rotate')
    headerContainer.classList.toggle('change-flex-row')
    shadowBackground.classList.toggle('shadow-background-active')
  }
}

headerMenuBtn.addEventListener('click', adaptiveMenu)

const selectMenuItem = (event) => {
  if(event.target.tagName === 'A') {
    headerMenuItems.forEach((el) => {
      if(el.classList.contains('header-menu-link__selected')){
        el.classList.remove('header-menu-link__selected')
      }
    })
    event.target.parentElement.classList.add('header-menu-link__selected')
  } 
}

const onScroll = () => {
  const curPos = window.scrollY;

  sections.forEach((section) => {
    if(section.offsetTop - 95 <= curPos && (section.offsetTop + section.offsetHeight - 95) > curPos) {
      headerMenuItems.forEach((headerMenuItem) => {
        headerMenuItem.classList.remove('header-menu-link__selected')
        if(section.getAttribute('id') === headerMenuItem.childNodes[0].getAttribute('href').substring(1)){
          headerMenuItem.classList.add('header-menu-link__selected')
        }
      })
    }
  })
}

document.addEventListener('scroll', onScroll)
headerMenu.addEventListener('click', selectMenuItem)

//slider 

const slider = document.querySelector('.home')
const arrowLeft = slider.querySelector('.arrow-left');
const arrowRight = slider.querySelector('.arrow-right');
const slides = document.querySelectorAll('.sliders .slide');
let currentSlide = 0;
let isEnabled = true;

const changeCurrentSlide = (n) => {
	currentSlide = (n + slides.length) % slides.length;
}

const hideSlide = (direction) => {
	isEnabled = false;
	slides[currentSlide].classList.add(direction);
	slides[currentSlide].addEventListener('animationend', function() {
		this.classList.remove('slide-active', direction);
	});
}

const showSlide = (direction) => {
  slides[currentSlide].classList.add('slide-next', direction);
  if(slides[currentSlide].classList.contains('bg-blue')) {
    home.classList.remove('home-bg-red')
    home.classList.add('home-bg-blue')
  } else {
    home.classList.remove('home-bg-blue')
    home.classList.add('home-bg-red')
  }
	slides[currentSlide].addEventListener('animationend', function() {
		this.classList.remove('slide-next', direction);
		this.classList.add('slide-active');
		isEnabled = true;
	});
}

const nextSlide  = (n) => {
	hideSlide('to-left');
	changeCurrentSlide(n + 1);
	showSlide('from-right');
}

const previousSlide = (n) => {
	hideSlide('to-right');
	changeCurrentSlide(n - 1);
	showSlide('from-left');
}

arrowLeft.addEventListener('click', () => {
	if (isEnabled) {
		previousSlide(currentSlide);
	}
});
arrowRight.addEventListener('click', () => {
	if (isEnabled) {
		nextSlide(currentSlide);
	}
});

// add btn for phones

const phoneVertical = document.querySelector('.phone-vertical')
const phoneHorizontal = document.querySelector('.phone-horizontal')
const phoneCentral = document.querySelector('.phone-central')
const phoneVerticalBackground = document.querySelector('.phone-background-vertical')
const phoneHorizontalBackground = document.querySelector('.phone-background-horizontal')
const phoneCentralBackground = document.querySelector('.phone-background-central')

const offPhone = (event) => {
  if(event.target.classList.contains('phone-vertical')){
    if(event.layerX > 98  && event.layerX < 116 && event.layerY > 422 && event.layerY < 436){
      phoneVerticalBackground.classList.toggle('phone-background-vertical-active')
    }
  }
  if(event.target.classList.contains('phone-horizontal')){
    if(event.layerX > 20 && event.layerX < 38 && event.layerY > 98 && event.layerY < 117){
      phoneHorizontalBackground.classList.toggle('phone-background-horizontal-active')
    }
  }
  if(event.target.classList.contains('phone-central')){
    if(event.layerX > 488 && event.layerX < 506 && event.layerY > 484 && event.layerY < 504){
      phoneCentralBackground.classList.toggle('phone-background-central-active')
    }
  }
}

phoneVertical.addEventListener('click', offPhone)
phoneHorizontal.addEventListener('click', offPhone)
phoneCentral.addEventListener('click', offPhone)

// filter 

const portfolioNav = document.querySelector('.portfolio-nav');
const portfolioNavItems = document.querySelectorAll('.portfolio-nav-element');
const portfolioItems = document.querySelectorAll('.portfolio-grid-item');
const portfolioGrid = document.querySelector('.portfolio-grid');

const random = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
      
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const filterItems = (event) => {
  let tempArr = []

  //change navbar
  if(event.target.tagName === 'SPAN') {
    portfolioNavItems.forEach((el) => {
      if(el.classList.contains('portfolio-nav-element__selected')){
        el.classList.remove('portfolio-nav-element__selected')
      }
    })
    event.target.classList.add('portfolio-nav-element__selected')
  
    // filter items
    if(event.target.textContent === 'Artwork'){
      for(let i = 0; i < portfolioItems.length; i++){
        if(portfolioItems[i].classList.contains('artwork')){
          tempArr.push(portfolioItems[i])
        }
      }
    } 
    
    if (event.target.textContent === 'Graphic Design') {
      for(let i = 0; i < portfolioItems.length; i++){
        if(portfolioItems[i].classList.contains('graphic-design')){
          tempArr.push(portfolioItems[i])
        }
      }
    }
    
    if (event.target.textContent === 'Web Design') {
      for(let i = 0; i < portfolioItems.length; i++){
        if(portfolioItems[i].classList.contains('web-design')){
          tempArr.push(portfolioItems[i])
        }
      }
    }

    if(event.target.textContent === 'All') {
      for(let i = 0; i < portfolioItems.length; i++){
        tempArr.push(portfolioItems[i])
      }
    }
    
    portfolioGrid.innerHTML = ""
    tempArr = random(tempArr)
    tempArr.forEach((el) => {
      return portfolioGrid.append(el)
    })
  }
}

portfolioNav.addEventListener('click',filterItems)

// select image
const portfolio = document.querySelector('.portfolio')
const imageItems = portfolio.querySelectorAll('img')

const imageSelect = (event) => {
  //unselect image
  if(event.target.tagName === 'IMG' && event.target.classList.contains('img__selected')){
    event.target.classList.toggle('img__selected')
    return
  }

  if(event.target.tagName === 'IMG'){
    imageItems.forEach((el) => {
      if(el.classList.contains('img__selected')){
        el.classList.toggle('img__selected')
      }
    })
    event.target.classList.toggle('img__selected')
  } 
}

portfolioGrid.addEventListener('click', imageSelect)

// form submit 

const nameSubject = document.querySelector('#nameInput')
const emailSubject = document.querySelector('#emailInput')
const inputSubject = document.querySelector('#subjectInput')
const messageTextarea = document.querySelector('#messageTextarea')
const btnSubmit = document.querySelector('.quote-form form')
const messageBlock = document.querySelector('#message-block')
const messageText = document.querySelector('.message-text')
const btnMessage = document.querySelector('#message-btn')

const submitForm = (event) => {
  event.preventDefault()
  let subject = inputSubject.value;
  let message = messageTextarea.value;
  let newMessage
  let newSubject

  //validation 
  console.log(message.length)
  if(message.length > 500) {
    messageText.innerHTML = '<h3>Ошибка!</h3><p>Слишком много текста в описании.</p>'
    messageBlock.classList.toggle('message-block__hidden')
    nameSubject.value = ''
    emailSubject.value = ''
    inputSubject.value = ''
    messageTextarea.value = '' 
    return
  }

  if(subject === '') {
    newSubject = 'Без темы'
  } else {
    newSubject = `Тема: ${subject}`
    if(subject.length > 25){
      newSubject = subject.slice(0, 20)
      newSubject += '...'
    }
  }

  if(message === '') {
    newMessage = 'Без описания'
  } else {
    newMessage = `Описание: ${message}`
    if(message.length > 75){
      newMessage = message.slice(0, 75)
      newMessage += '...'
    }
  }

  messageText.innerHTML = `<h3>Письмо отправлено!</h3><p>${newSubject}</p><p>${newMessage}</p>`

  messageBlock.classList.toggle('message-block__hidden')
  nameSubject.value = ''
  emailSubject.value = ''
  inputSubject.value = ''
  messageTextarea.value = '' 
}

const closeModal = () => {
  messageBlock.classList.toggle('message-block__hidden')
}

btnSubmit.addEventListener('submit', submitForm, true)
btnMessage.addEventListener('click', closeModal)