"use strict";

let n;

const slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("carousel-item");
    const dots = document.getElementsByClassName("dot");
    
    // slides.length = # of images in carousel
    if (n > slides.length) { // reset slideIndex to beginning
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i+=1) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i+=1) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


