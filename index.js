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


      // json work here 

 let html = "" 


 fetch ('data.json')

 .then (response => response.json())
 .then(json => {

    for (let val of json){



      html +=    ` <div class="col-3">

             <div class="card" style="width: 18rem;border: none;"  >

               <img src="${p_image}" alt="..."  style="border-radius: 20px;">

           <div class="card-body">

         <h4 class="card-title" id="title" style="display: inline;">${val.p_title}</h4>

       <div style="padding: 5px;font-size: 17px;" id="discription">${val.p_discription}</div>

     <p id="rating" style="margin: 0;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
     
    <p style="font-size: 30px;font-family:'Times New Roman';display: inline;" id="price" >${val.p_price}</p>
    
    
     <button class="view" style="height: 40px;width: 100%;border-radius: 40px; background:linear-gradient(135deg, #bf00e6, #f69, #ff9f1a);; outline: none; border:none; color: white;margin-top: 3px;">Register</button>
  </div>
</div>
                </div>
`



    }





 })









