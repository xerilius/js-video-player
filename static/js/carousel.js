"use strict";

const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");

prevButton.addEventListener('click', moveSlide);
nextButton.addEventListener('click', moveSlide);   

// Show first slide Initially
let slideIndex = 1;

showSlide(slideIndex);


// Next/Previous Buttons Event Handler Function
function moveSlide() {
    let slideIncrement = parseFloat(this.dataset.move);
    showSlide(slideIndex += slideIncrement);
    console.log(slideIndex);
}

// Function that displays carousel image
function showSlide(imgNum) {
    const slides = document.getElementsByClassName("carousel-item");
    const dots = document.getElementsByClassName("dot");
    
    // Hide all images in carousel
    for (let i = 0; i < slides.length; i += 1) {
        slides[i].style.display = "none";
    }

    if (imgNum > slides.length) {
        slideIndex = 1;
        slides[0].style.display= "flex";
    }

    if (imgNum < 1) {
        slideIndex = slides.length;
        slides[(slides.length) -1].style.display = "flex";
    }

    else {
        slides[imgNum-1].style.display= "flex";
    }
    
    
    
    
}

