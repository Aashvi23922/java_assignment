function menu_dis(){
    let dash = document.querySelector(".header"); 
    let random = window.scrollY;
    
    if(random > 0){
       dash.classList.add("bg_img");
       }else{
       dash.classList.remove("bg_img");
       }   
       }
    window.addEventListener("scroll",menu_dis); 