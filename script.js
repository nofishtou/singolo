console.log('hello world')
const headerMenu = document.querySelector('.header-menu');
const headerMenuItems = headerMenu.querySelectorAll('.header-menu-item')

const selectMenuItem = (event) => {
  console.log(event.target)
  headerMenuItems.forEach((el) => {
      if(el.classList.contains('header-menu-link__selected')){
        el.classList.remove('header-menu-link__selected')
      }
  })
  if(event.target.tagName === 'A') {
    event.target.parentElement.classList.add('header-menu-link__selected')
  } 
}

headerMenu.addEventListener('click', selectMenuItem)

//slider 

const slider = document.querySelector('#slider')
const slides = slider.querySelectorAll('.slide');
const arrowLeft = slider.querySelector('.arrow-left');
const arrowRight = slider.querySelector('.arrow-right');

const slideChange = (event) => {
  console.log(event.target)
  for(let i = 0; i < slides.length; i++) {
    if(slides[i].classList.contains('slide-active')){
      if(event.target.classList.contains('arrow-left')){
        slides[i].classList.remove('slide-active')
        console.log(i)
        if( i === 0) {
          slides[slides.length - 1].classList.add('slide-active')
          break
        } else {
          slides[i - 1].classList.add('slide-active')
          break
        }
      }
      if(event.target.classList.contains('arrow-right')){
        slides[i].classList.remove('slide-active')
        if( i === slides.length -1) {
          slides[0].classList.add('slide-active')
          break
        } else {
          slides[i + 1].classList.add('slide-active')
          break
        }
      }
    }
  }
}

arrowLeft.addEventListener('click', slideChange);
arrowRight.addEventListener('click', slideChange);

// add btn for phones

const iphoneVertical = document.querySelector('.phone-vertical')
const iphoneHorizontal = document.querySelector('.phone-horizontal')
const iphoneVerticalBackground = document.querySelector('.phone-background-vertical')
const iphoneHorizontalBackground = document.querySelector('.phone-background-horizontal')

const offPhone = (event) => {
  console.log(event.layerX, event.layerY )
  if(event.target.classList.contains('phone-vertical')){
    if(event.layerX < 116 && event.layerX > 94 && event.layerY < 436 && event.layerY > 422){
      iphoneVerticalBackground.classList.toggle('phone-background-vertical-active')
    }
  }
  if(event.target.classList.contains('phone-horizontal')){
    if(event.layerX < 37 && event.layerX > 22 && event.layerY < 114 && event.layerY > 100){
      iphoneHorizontalBackground.classList.toggle('phone-background-horizontal-active')
    }
  }
}

iphoneVertical.addEventListener('click', offPhone)
iphoneHorizontal.addEventListener('click', offPhone)

// filter 

const portfolioNav = document.querySelector('.portfolio-nav');
const portfolioNavItems = document.querySelectorAll('.portfolio-nav-element');
const portfolioItems = document.querySelectorAll('.portfolio-grid-item');
const portfolioGrid = document.querySelector('.portfolio-grid');

const filterItems = (event) => {
  const tempArr = []

  //change navbar
  portfolioNavItems.forEach((el) => {
    if(el.classList.contains('portfolio-nav-element__selected')){
      el.classList.remove('portfolio-nav-element__selected')
    }
  })
  if(event.target.tagName === 'SPAN') {
    event.target.classList.add('portfolio-nav-element__selected')
  }

  // filter items
  if(event.target.textContent === 'Artwork'){
    for(let i = 0; i < portfolioItems.length; i++){
      if(portfolioItems[i].classList.contains('artwork')){
        tempArr.push(portfolioItems[i])
      }
    }
  } else if (event.target.textContent === 'Graphic Design') {
    for(let i = 0; i < portfolioItems.length; i++){
      if(portfolioItems[i].classList.contains('graphic-design')){
        tempArr.push(portfolioItems[i])
      }
    }
    
  } else if (event.target.textContent === 'Web Design') {
    for(let i = 0; i < portfolioItems.length; i++){
      if(portfolioItems[i].classList.contains('web-design')){
        tempArr.push(portfolioItems[i])
      }
    }
  } else {
    for(let i = 0; i < portfolioItems.length; i++){
      tempArr.push(portfolioItems[i])
    }
  }

  portfolioGrid.innerHTML = ""
  tempArr.forEach((el) => {
    portfolioGrid.append(el)
  })
  console.log(tempArr)
}

portfolioNav.addEventListener('click',filterItems)