function goToPage() {
    window.location.href = "Contact.html";
}
function backToPage(){
window.location.href = "index.html";
}

var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");

function opentab(tabname){
for(tablink of tablinks){
    tablink.classList.remove("active-link");
}
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab")
}
// ----------------------------------portfolio-------------------------------------------
const videos = [
{ src: 'videos/video2.mp4', type: 'video/mp4' },
{ src: 'videos/video2.mp4', type: 'video/mp4' },
{ src: 'videos/video2.mp4', type: 'video/mp4' }
];

let currentIndex = 0;

document.getElementById('see-more-btn').onclick = function() {
if (currentIndex < videos.length) {
    const videoGallery = document.getElementById('myworks');
    const newVideoContainer = document.createElement('div');
    newVideoContainer.className = 'myvideos';
    
    const newVideo = document.createElement('video');
    newVideo.width = 470;
    newVideo.controls = true;

    const source = document.createElement('source');
    source.src = videos[currentIndex].src;
    source.type = videos[currentIndex].type;

    newVideo.appendChild(source);
    newVideoContainer.appendChild(newVideo);
    videoGallery.appendChild(newVideoContainer);
    
    currentIndex++;
} else {
    alert("No more videos to load!");
}
};
// -----------------------------home--------------------------------------------
