
//Scroll JS
const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 120)
})

//Menu Bar JS
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};


// banner
let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.slide').length;

    function changeSlide(n) {
        showSlide(currentSlide += n);
    }

    function showSlide(n) {
        const slides = document.querySelector('.slides');
        const slideItems = document.querySelectorAll('.slide');

        if (n > totalSlides - 1) {
            currentSlide = 0;
        } else if (n < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = n;
        }

        const translateValue = -currentSlide * 100 + '%';
        slides.style.transform = 'translateX(' + translateValue + ')';
    }

    // Automatic slideshow
    setInterval(function() {
        changeSlide(1);
    }, 3000); // Change slide every 3 seconds (adjust as needed)