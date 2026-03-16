                   // navbar
 let menu_list = document.getElementById("menu_list");
if (menu_list) {
    menu_list.style.maxHeight = "0px";
}

function toggleMenu(){
    if (!menu_list) return;
    if (menu_list.style.maxHeight === "0px") {
        menu_list.style.maxHeight = "500px";
    } else {
        menu_list.style.maxHeight = "0px";
        
        document.querySelectorAll("#menu_list ul").forEach(sub => sub.style.display = "none");
    }
}

// Mobile Dropdown (DOMContentLoaded + close other submenus)
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("#menu_list > li > a").forEach(function(link) {
        const submenu = link.parentElement.querySelector("ul");
        
        if (submenu) {
            link.addEventListener("click", function(e) {
                if (window.innerWidth <= 1150) {
                    e.preventDefault();
                    
                
                    document.querySelectorAll("#menu_list ul").forEach(sub => {
                        if (sub !== submenu) sub.style.display = "none";
                    });
                    
                    
                    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
                }
            });
        }
    });
});
 
 
 
                                // end navbar
 
 
 
 let html = "" 


 fetch('arrival.json')

 .then (response => response.json())
 .then(json => {

    for (let data of json){

      html +=   `
      <div class="col-lg-3 col-md-4 col-sm-3 d-flex justify-content-center mb-5" >
      <div class="card" style="width: 20rem;border: none; " >

           <img src="${data.p_image}" class="product-img" alt="..." style="border-radius: 20px;">


           <div class="card-body">

         <h5 class="card-title pro-name">${data.p_name}</h5>
        <div class="pro-description card-preview">  ${data.p_description}</div>
          <p class="pro-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
          <p class="pro-price">price <span style="font-size: 30px;">${data.p_price}</span></p>
    
     <button class="btn btn-primary view" data-id="${data.p_id}" style="height: 40px;width: 100%;border-radius: 40px; background:linear-gradient(135deg, #bf00e6, #f69, #ff9f1a);; outline: none; border:none; color: white;margin-top: 3px;">View More</button>
  </div>

        <a herf="${data.p_link}" class = "btn mb-2" download" style="border-radius:40px;background-color:blue;color:white" download> download </a>

</div>
</div>`

    }


       document.getElementById('p-list').innerHTML = html


 })



// modal view on click 


$(document).on('click', '.view', function(e){
    e.preventDefault();

    let myid = $(this).data('id')

 fetch('arrival.json')
.then(response => response.json())
.then(json =>{

  let p;

  for (let data of json){
      if (data.p_id == myid){
        p = data
        break;
      }
  }

  $('#image').attr('src',p.p_image)
  $('#name').html(p.p_name)
  $('#price').html(p.p_price)
  $('#description').html(p.p_description)
  $('#qty').val(1)
  $('#add-cart').data('product', p)

  let modal = new bootstrap.Modal(document.getElementById('modal'));
  modal.show();

})

})

// add to cart 

$(document).on("click",'#add-cart',function(){


  let product = $(this).data('product');
  let qty = parseInt($('#qty').val())

  let cart = JSON.parse(localStorage.getItem('cart'))  || []

  let found = false 

  for (let item of cart ) {              
    if (item.p_id == product.p_id){
        item.qty += qty;
        found = true
      break;

    }
  }


  if(!found) {
    product.qty = qty;
    cart.push(product);

  }

  localStorage.setItem('cart',JSON.stringify(cart)) || [];

  alert('product added successfully')


})