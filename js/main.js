/* Inicializacion AOS Library */
AOS.init();

/* <--- Animacion NavBar ---> */
let navBar = window.pageYOffset

window.addEventListener('scroll', () => {
  let navUbication = window.pageYOffset

  navBar >= navUbication
    ? (this.document.getElementsByTagName('nav')[0].style.top = '0px')
    : (document.getElementsByTagName('nav')[0].style.top = '-100px')

  navBar = navUbication
})

/* <--- Menu Hamburger ---> */
let enlacesHeader = document.querySelectorAll('.enlaces-header')[0]

let semaforo = true

document.querySelectorAll('.hamburger')[0].addEventListener('click', () => {
  semaforo
    ? ((document.querySelectorAll('.hamburger')[0].style.color = '#fff'),
      (semaforo = false))
    : ((document.querySelectorAll('.hamburger')[0].style.color = '#000'),
      (semaforo = true))

  enlacesHeader.classList.toggle('menushow')
})
