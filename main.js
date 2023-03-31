let bar = document.getElementById('bar')
let thumbnail =document.getElementsByClassName('thumbnail')
let activeImg = document.getElementsByClassName('actives')
const closs = document.getElementById('close')
const nav = document.getElementById('navbar')
let content = document.getElementsByTagName('body')[0]
let darkmode = document.querySelector('.switch')
let TypeEffect = document.querySelector('.multitext')


darkmode.addEventListener('click', function(){
  darkmode.classList.toggle('active')
  content.classList.toggle('night')
})

for (let i = 0; i < thumbnail.length; i++) {

  thumbnail[i].addEventListener('mouseover', function() {
    if (activeImg.length > 0 ){
      activeImg[0].classList.remove('active')
    }

    this.classList.add('active')
    document.getElementById('Mainimg').src = this.src
  })
  
}

var typed = new Typed('#multitext', {
  strings: ['....','laptop', 'graphics card.', 'Smartphone', 'Cpu', 'GPU', 'TV'],
  typeSpeed: 100,
  loop : true
});



let buttonLeft = document.getElementById('leftslide')
let buttonRight = document.getElementById('rightslide')

buttonLeft.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft -= 180
})

buttonRight.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft += 180
})

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
}

if (closs) {
  closs.addEventListener('click', () => {
    nav.classList.remove('active')
  })
}

