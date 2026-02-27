              //  navbar responsive li starts 

let menu_list = document.getElementById("menu_list");
menu_list.style.maxHeight = "0px"

function toggleMenu(){

    if(menu_list.style.maxHeight == "0px")
    
        menu_list.style.maxHeight = "300px"
    
    else{

        menu_list.style.maxHeight = "0px"
    }
}

                      //  navbar responsive li over 

                      // discounnt bar starts here 

const announcements = document.querySelectorAll('.announcement');
const bar = document.getElementById('announcementBar');
let current = 0;
let interval;

function startTicker() {
  interval = setInterval(() => {
    announcements[current].classList.remove('active');
    announcements[current].classList.add('exit');

    current = (current + 1) % announcements.length;

    announcements[current].classList.remove('exit');
    announcements[current].classList.add('active');
  }, 2500);
}

function stopTicker() {
  clearInterval(interval);
}

bar.addEventListener('mouseenter', stopTicker);
bar.addEventListener('mouseleave', startTicker);

startTicker();

                      // discounts bar ends here 




                      // slider starts here 

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

                      // slider ends here bruh














