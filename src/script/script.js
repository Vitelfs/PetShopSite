let count = 1;

document.getElementById('radio1').checked = true;


setInterval (function(){
    nextImage();
},5000);

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

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