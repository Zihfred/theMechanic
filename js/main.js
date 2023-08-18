let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let closeButton = document.querySelector('.closeButton');
let menuButtons = document.querySelectorAll('.menuLink');
menuBtn.addEventListener('click', function(){
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
  closeButton.classList.toggle('active');
})
menuButtons.forEach(button => {
  button.addEventListener('click', function(){
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    closeButton.classList.toggle('active');
  })
})
closeButton.addEventListener('click', function(){
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
  closeButton.classList.toggle('active');
})



