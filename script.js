
$(document).ready(()=>{

    if(window.matchMedia('(min-width: 1280px)').matches){
        // Hover on mega-menu//
        $('.mega-box').hide();
        $('#services').on('mouseenter',()=>{
            $('.mega-box').show();
        });
        $('.mega-box').on('mouseleave', ()=>{
            $('.mega-box').hide();
            $('#services').removeClass('services-toggle')
        });
    }
    
    // Display menu on click //   
    if(window.matchMedia('(max-width: 1280px)').matches){
        $('.fa-bars').on('click',()=>{
            $('.nav-links').toggle().addClass('mobile-menu');
            $('.fa-x').show();
        });
        $('.fa-x').on('click', ()=>{
            $('.nav-links').toggle().removeClass('mobile-menu');
            $('.fa-x').hide();
        })
        $('#services').on('click',()=>{
            $('.mega-box').toggle().addClass('mobile-mega');
            $('#services-down').toggle();
            $('#services-up').toggle();
        });
        $('.mega-links').hide();
        $('#product-name').on('click', ()=>{
            $('#product-col').toggle();  
            $('#product-down').toggle();
            $('#product-up').toggle();         
        });
        $('#sale-name').on('click', ()=>{
            $('#sale-col').toggle();   
            $('#sale-down').toggle();
            $('#sale-up').toggle();  
        });
    }

    if(window.matchMedia('(max-width: 768px)').matches){
            $('.fa-bars').on('click',()=>{
            $('.nav-links').show().addClass('mobile-menu');
            $('.fa-bars').hide();
            $('.fa-x').show();
        });
        $('.fa-x').on('click', ()=>{
            $('.nav-links').hide().removeClass('mobile-menu');
            $('.fa-bars').show();
            $('.fa-x').hide();
        });
        $('#contact').on('click', ()=>{
            $('.contact-links').toggle();
            $('#contact-down').toggle();
            $('#contact-up').toggle();
        });
        $('#categories').on('click', ()=>{
            $('.categories-links').toggle();
            $('#categories-down').toggle();
            $('#categories-up').toggle();
        });
        $('#about').on('click', ()=>{
            $('.about-links').toggle();
            $('#about-down').toggle();
            $('#about-up').toggle();
        })
    }



});

$( document ).ready(function () {
    $(".moreBox").slice(0, 4).show();
      if ($(".blogBox:hidden").length != 0) {
        $("#loadMore").show();
      }   
      $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 8).slideDown();
        if ($(".moreBox:hidden").length == 0) {
          $("#loadMore").fadeOut('slow');
        }
      });

    $('.iconHeart').click(function() {
        $('#heartIncrease').html(function(i, val) { return val*1+1 });
    });

    $('.iconCart').click(function() {
        $('#cartIncrease').html(function(i, val) { return val*1+1 });
    });
});
