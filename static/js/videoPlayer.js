"use strict";
// 1. Get Elements
const player = document.querySelector('.player');  // parent

const video = player.querySelector('.player__video'); // child
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('progress__filled');
const playButton = player.querySelector('.play');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// 2. Functions
function playVideo() {
    // const toggle = video.paused ? 'play' : 'pause';
    // video[toggle]();

    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}

function updateButton() {
    // condition ? exprIfTrue : exprIfFalse
    // const icon = this.paused ? '►' : '❚❚'; 

    if (this.paused == true) {
        const icon = '►';
        playButton.textContent = icon;
    }
    else {
        const icon =  '❚❚';
        playButton.textContent = icon;
    }
}

function skip() {
    console.log(this); // skip button 
    console.log(this.dataset); // returns dataset attribute
    console.log(this.dataset.skip); // dataset attribute value string --> 25
    console.log(video.currentTime);
    // adding seconds to video's current time
    video.currentTime += parseFloat(this.dataset.skip);
}



// 3. Event Listeners
video.addEventListener('click', playVideo);
playButton.addEventListener('click', playVideo);
// play button
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
// for all skip buttons
skipButtons.forEach(button => button.addEventListener('click', skip));