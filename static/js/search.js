"use strict";  

const searchbar = document.querySelector('.searchbar');
const magGlass = document.querySelector('.mag');

searchbar.addEventListener("focus", changeMagColor);
searchbar.addEventListener("focusout", resetMagColor);

function changeMagColor(evt) {
    magGlass.classList.add("focused");
}
function resetMagColor(evt) {
    magGlass.classList.remove("focused");
}