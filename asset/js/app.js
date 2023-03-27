$(function(){

'use strict';
$('.new_product_slider').slick({
    
    slidesToShow:4,
    prevArrow:'<i class="fa-solid fa-chevron-left product_slider_icon"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right product_slider_icon"></i>',




})



$('#deals-count').countdown('2024/12/31', function(event) {
    var $this = $(this).html(
        event.strftime(
            '' 
            + '<div class="deals_count_item"><h3>%d</h3><p>Days</p></div>'
            + ' <span>:</span>'
      + '<div class="deals_count_item"><h3>%H</h3><p>Hour</p></div>'
      + '<span>:</span>'
      + '<div class="deals_count_item"><h3>%M</h3><p>Minute</p></div>'
      + '<span>:</span>'
      + '<div class="deals_count_item"><h3>%S</h3><p>Sec</p></div>'
    )
    );
  });


})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))