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



      html +=   `<div class="card" style="width: 18rem;border: none;"  >

               <img src="${val.p_image}" alt="..."  style="border-radius: 20px;">

           <div class="card-body">

         <h4 class="card-title pro-name" id="name" >${val.p_title}</h4>
        <div class="pro-discription"     id="discription">${val.p_discription}</div>
          <p class="pro-rating"          id="rating" ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
          <p class="pro-price"  >price <span style="font-size: 30px;">${val.p_price}</span></p>
    
     <button class="btn btn-primary view" data-id="${val.p_id}" style="height: 40px;width: 100%;border-radius: 40px; background:linear-gradient(135deg, #bf00e6, #f69, #ff9f1a);; outline: none; border:none; color: white;margin-top: 3px;"></button>
  </div>
</div>`


    }

       document.getElementById('myRow').innerHTML = html


 })


// modal 


$(document).on('click','view',function(e){

  e.preventDefault();

  let myid = $(this).data('id')

  let pro;

  fetch('data.json')  //json string se js object convert hogya

.then(response => response.json)
.then(json =>{

  for (let product of json){

      if (product.p_id == myid){

        pro = product

        break;
      }
  }

  $('#image').attr('src',pro.p_image)
  $('#title').html(pro.p_name)
  $('#price').html(pro.p_price)
  $('#discription').html(pro.p_discription)




})

new bootstrap.modal(document.getElementById('mymodal')).show()

})



