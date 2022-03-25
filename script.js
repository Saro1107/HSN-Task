
// navbar script
let button = document.querySelector(".arrow");
let links = document.querySelector(".nav-links");

button.addEventListener("click",()=>{
    links.classList.toggle("display");
    button.children[0].classList.toggle("toggle1");
    button.children[1].classList.toggle("toggle2");
    button.children[2].classList.toggle("toggle3");
});

$(".main-carousel").flickity({
    cellAlign:'left',
    wrapAround:false,
    freeScroll:false
   });


//scroll up button js...

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100)
    {
        toTop.classList.add("activeScroll");
    }
    else
    {
        toTop.classList.remove("activeScroll");
    }
})