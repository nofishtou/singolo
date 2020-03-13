console.log('hello world')
const headerMenu = document.querySelector('.header-menu');
const headerMenuItems = headerMenu.querySelectorAll('.header-menu-item')

const selectMenuItem = (event) => {
  headerMenuItems.forEach((el) => {
      if(el.classList.contains('header-menu-link-active')){
        el.classList.remove('header-menu-link-active')
      }
  })
  if(event.target.tagName === 'A') {
    event.target.parentElement.classList.add('header-menu-link-active')
  } 
  if (event.target.tagName === 'LI') {
    event.target.classList.add('header-menu-link-active')
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

console.log(slides)
console.log(arrowLeft)
console.log(arrowRight)