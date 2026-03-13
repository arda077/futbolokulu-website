let slides = [

{
image:"basketbol.png",
title:"BİR TUTKUDUR",
sport:"BASKETBOL",
desc:"Tüm yaşlara basketbol eğitimi"
},

{
image:"voleybol.jpg",
title:"VOLEYBOL TAKIMI",
sport:"KAYITLARI BAŞLADI",
desc:"Spor kulübümüze kayıtlar başladı"
}

];

let i = 0;

setInterval(function(){

let img = document.getElementById("slide");

img.style.opacity = 0;

setTimeout(function(){

i++;

if(i >= slides.length){
i = 0;
}

img.src = slides[i].image;

document.getElementById("title").innerText = slides[i].title;
document.getElementById("sport").innerText = slides[i].sport;
document.getElementById("desc").innerText = slides[i].desc;

img.style.opacity = 1;

},700);

},5000);
var swiper = new Swiper(".mySwiper", {

loop:true,

autoplay:{
delay:5000,
disableOnInteraction:false
},

effect:"fade",

navigation:{
nextEl:".swiper-button-next",
prevEl:".swiper-button-prev"
}

});

var swiper = new Swiper(".mySwiper", {

loop:true,

autoplay:{
delay:5000,
disableOnInteraction:false
},

effect:"fade",

navigation:{
nextEl:".swiper-button-next",
prevEl:".swiper-button-prev"
}

});

var swiper = new Swiper(".mySwiper", {

loop:true,

autoplay:{
delay:5000,
disableOnInteraction:false
},

effect:"fade",

on:{
slideChange:function(){
document.querySelectorAll(".slider-text h1, .slider-text h2, .slider-text p, .slider-text button").forEach(el=>{
el.style.animation="none";
el.offsetHeight;
el.style.animation="";
});
}

}

});

function scrollToTop(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}