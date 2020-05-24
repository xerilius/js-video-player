"use strict";

const slides = document.getElementsByClassName("carousel-item");
const dots = document.getElementsByClassName("dot");
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");

prevButton.addEventListener('click', moveSlide);
nextButton.addEventListener('click', moveSlide);   

// Show first slide Initially
let slideIndex = 1;
showSlide(1);



// Next/Previous Buttons Event Handler Function
function moveSlide() {
    console.log(this.dataset.move); // this returns element
    // evt returns click event
    let slideIncrement = this.dataset.move;
    showSlide(slideIndex += slideIncrement)
}


function showSlide(totalIndex) {
    slides[totalIndex].style.display= "flex";
    
    
   
}

