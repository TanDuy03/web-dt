window.addEventListener("load", function () {
    const links = [...document.querySelectorAll('.menu-item')];
    links.forEach((item) => item.addEventListener("mouseenter", handleHover));
    
    const line = document.createElement("div");
    line.className = "line-hover";
    document.body.appendChild(line);

    function handleHover(event) {
        const {left, top, width, height} = event.target.getBoundingClientRect();
        const offetBottom = -15;
        line.style.left = `${left}px`;
        line.style.top = `${top + height + offetBottom}px`;
        line.style.width = `${width}px`;
    }

    const menu = document.querySelector(".menu");
    menu.addEventListener("mouseleave", function () {
        line.style.width = 0;
    });

});

//Dropdown Menu Click
let menu = document.querySelector(".menu");

$(document).ready(function(){
    $(".sub-btn").click(function(){
        $(this).next(".sub-menu").slideToggle();
    });
    $(".more-btn").click(function(){
        $(this).next(".more-menu").slideToggle();
    });
    });
    // let menu = document.querySelector(".menu");
    let menuBtn = document.querySelector(".menu-btn");
    let closeBtn = document.querySelector(".close-btn");

    menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

//Click Out Menu
document.addEventListener("click", clickOutMenu);
function clickOutMenu(event) {
    if(!menu.contains(event.target)&& !event.target.matches(".menu-toggle")){
        menu.classList.remove("active");
    }
}

// Auto Slide
let indexValue = 0;
function autoSlide(){
    setTimeout(autoSlide, 2500);
    let x;
    const image = document.querySelectorAll(".image-slide");
    for(x = 0; x < image.length; x++){
        image[x].style.display = "none";
    }
    indexValue++;
    if(indexValue > image.length){
        indexValue = 1;
    }
    image[indexValue - 1].style.display = "block";
}
autoSlide();