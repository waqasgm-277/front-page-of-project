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
