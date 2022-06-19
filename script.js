
$(document).ready(()=>{

    if(window.matchMedia('(min-width: 1280px)').matches){
        $('.mega-box').hide();
        $('#services').on('mouseenter',()=>{
            $('.mega-box').show();
        });
        $('.mega-box').on('mouseleave', ()=>{
            $('.mega-box').hide();
            $('#services').removeClass('services-toggle')
        });
    }
    // Hover on mega-menu//
    

    // Display menu on click //   
    if(window.matchMedia('(max-width: 1280px)').matches)     
    $('.fa-solid').on('click',()=>{
        $('.nav-links').toggle().addClass('mobile-menu');
        $('.fa-x').toggle();
    });
    $('#services').on('click',()=>{
        $('.mega-box').toggle().addClass('mobile-mega');
    });


});