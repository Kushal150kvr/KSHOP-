const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');

    })
}
if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');

    })
}
var main = document.getElementById("mainimg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function() {
    main.src = smallimg[0].src;
}
smallimg[1].onclick = function() {
    main.src = smallimg[1].src;
}
smallimg[2].onclick = function() {
    main.src = smallimg[2].src
}
smallimg[3].onclick = function() {
    main.src = smallimg[3].src
}
smallimg[4].onclick = function() {
    main.src = smallimg[4].src
}


var i = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = " none";
    }
}
var modal = document.getElementsByClassName('far fa-times-circle');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}