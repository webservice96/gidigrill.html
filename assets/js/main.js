$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    // animateOut:true,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});


var body = document.getElementById("body");
var navElem = document.getElementById("nav-menu");
var whiteBurIcon = document.getElementById("orange_burger_icon");
var closeBurIcon = document.getElementById("close_icon");

function openNav() {
  if(navElem.style.opacity==='0'){
    navElem.style.opacity='1';
    navElem.style.visibility='inherit';
    navElem.style.transform= 'matrix(1, 0, 0, 1, 0, 0)';
    whiteBurIcon.style.display='none';
    closeBurIcon.style.display='block';
    body.classList.add("nav-open");
  }
}
function closeNav(){
 if(navElem.style.opacity='1'){
  navElem.style.opacity='0'
  navElem.style.visibility='hidden';
  navElem.style.transform= "matrix(1, 0, 0, 1, 0, -1000)";
  whiteBurIcon.style.display='block';
  closeBurIcon.style.display='none';
  body.classList.remove("nav-open");
 }
}
