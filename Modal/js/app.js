let header = gsap.timeline({
  scrollTrigger: {
    trigger: '.header',
    start: '0%',
    end: '80%',
    scrub: 1
  }
})
let header2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.header',
    start: '0%',
    end: '80%',
    scrub: 1,
    pin: true,
    pinSpacing: false
  }
})

header.fromTo('.title-text', {opacity: '100%'}, {opacity: '0%'})

let modalBtn = document.querySelector('.modal-btn')
let modalClose = document.querySelector('.modal-close')

let modal = gsap.timeline({defaults: {duration: 0.75, ease: Power1.easeOut}})

modalBtn.addEventListener('click', () => {
 // modalBg.classList.add('bg-active')
 modal.fromTo('.modal-bg', {opacity: '0%', visibility: 'hidden'}, {opacity: '100%', visibility: 'visible'})
 modal.fromTo('.modal', {scale: 0}, {scale: 1}, '<')
})

modalClose.addEventListener('click', () => {
  modal.to('.modal-bg',  {opacity: '0%', visibility: 'hidden'})
})