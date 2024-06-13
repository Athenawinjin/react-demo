// script.js

$(document).ready(function(){
  $('.carousel-main').flickity({
    contain: true,
    pageDots: true
  });

  $('.carousel-nav').flickity({
    asNavFor: '.carousel-main',
    draggable: false,
    percentPosition: false,
    groupCells: "100%",
    pageDots: false
  });
});

