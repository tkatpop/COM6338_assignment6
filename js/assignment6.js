let f_link = document.getElementById("recipes");
f_link.addEventListener("click", function (event){
    let is_sure = confirm("You are leaving this webpage. Are you sure you want to leave?");
    if (is_sure === false){
        event.preventDefault();
    }
}, false);

let title = document.getElementById("food");
title.addEventListener("dblclick", function (){
    window.scrollBy(0,200);
});

let r_image= ["images/mac_n_cheese.jpg","images/picture1.jpg","images/picture2.jpg","images/picture3.jpg","images/picture4.jpg"],
    im = document.getElementById("my_image"),
    rand_int = Math.floor(Math.random() * 5);
im.src = r_image[rand_int];



