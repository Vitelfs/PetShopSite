function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("content").classList.add("content-open");
    document.getElementById("video-grid").classList.add("video-grid-open");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("content").classList.remove("content-open");
    document.getElementById("video-grid").classList.remove("video-grid-open");
}

const carouselList = document.querySelector('.carousel-about');
let currentPosition = 0;


function slideNext() {
    if(currentPosition > -500){
        currentPosition -= 100;
        carouselList.style.transform = `translateX(${currentPosition}%)`;
    }
}

function slideBefore(){
    if(currentPosition != 0){
        currentPosition += 100; 
        carouselList.style.transform = `translateX(${currentPosition}%)`;
    }
}
