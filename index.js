let menu_list = document.getElementById("menu_list");
menu_list.style.maxHeight = "0px"

function toggleMenu(){

    if(menu_list.style.maxHeight == "0px")
    
        menu_list.style.maxHeight = "300px"
    
    else{

        menu_list.style.maxHeight = "0px"
    }
}



const slides = document.querySelector('.slides')
const images = document.querySelectorAll('.slides img');

let index = 0;

function showSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`
}

document.querySelector('.next').addEventListener('click', () => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  showSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  showSlide();
});