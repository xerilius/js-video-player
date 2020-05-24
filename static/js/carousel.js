"use strict";

const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");
prevButton.addEventListener('click', moveSlide);
nextButton.addEventListener('click', moveSlide);   

const dots = document.querySelectorAll(".dot");
dots.forEach(dot => dot.addEventListener('click', currentSlide));


// Show first slide Initially
let slideIndex = 1;
showSlide(slideIndex);


// Next/Previous Buttons Event Handler Function
function moveSlide() {
    let slideIncrement = parseFloat(this.dataset.move);
    showSlide(slideIndex += slideIncrement);
}

// Nav Dots
function currentSlide() {
    let num = parseFloat(this.dataset.slide);
    showSlide(slideIndex = num);
}

// Function that displays carousel image
function showSlide(imgNum) {
    const slides = document.getElementsByClassName("carousel-item");
    const dots = document.getElementsByClassName("dot");
 
    // Hide all images in carousel
    for (let i = 0; i < slides.length; i += 1) {
        slides[i].style.display = "none";
    }

    // if img# is (5) set reset carousel and set it to first image
    if (imgNum > slides.length) {
        slideIndex = 1;
        slides[0].style.display= "flex";
    } 

    //  if  img# is (-1) set image to last image
    else if (imgNum < 1) {
        slideIndex = slides.length;
        slides[(slides.length) -1].style.display = "flex";
    } 

    else {
        slides[slideIndex-1].style.display= "flex";
    }

    // Dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    dots[slideIndex-1].className += " active";
}

