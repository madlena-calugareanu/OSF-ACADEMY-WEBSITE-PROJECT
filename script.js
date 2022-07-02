
$(document).ready(()=>{

    $(window).bind('resize', function() {
        location.reload();
    });
        // make it as accordion for widest screens
        if (window.innerWidth > 1280) {

        // Hover on mega-menu//
        $('.mega-box').hide();
        $('#services').on('mouseenter',()=>{
            $('.mega-box').show();
        });
        $('.mega-box').on('mouseleave', ()=>{
            $('.mega-box').hide();
            $('#services').removeClass('services-toggle')
        });
        };

        if (window.innerWidth < 1280) {
            $('.fa-bars').on('click',()=>{
                $('.nav-links').toggle().addClass('mobile-menu');
                $('.fa-x').show();
            });
            $('.fa-x').on('click', ()=>{
                $('.nav-links').toggle().removeClass('mobile-menu');
                $('.fa-x').hide();
            })
            $('#services-up').hide();
            $('#services').on('click',()=>{
                $('.mega-box').toggle().addClass('mobile-mega');
                $('#services-down').toggle();
                $('#services-up').toggle();
            });
            $('.mega-links').hide();
            $('#product-up').hide();
            $('#product-name').on('click', ()=>{
                $('#product-col').toggle();  
                $('#product-down').toggle();
                $('#product-up').toggle();         
            });
            $('#sale-up').hide(); 
            $('#sale-name').on('click', ()=>{ 
                $('#sale-col').toggle();   
                $('#sale-down').toggle();
                $('#sale-up').toggle();  
            });
        };

        if (window.innerWidth < 768) {
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
            });
        };
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
    $(".moreBox").slice(0, 4).show();
      if ($(".blogBox:hidden").length != 0) {
        $("#loadMore2").show();
      }   
      $("#loadMore2").on('click', function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 8).slideDown();
        if ($(".moreBox:hidden").length == 0) {
          $("#loadMore2").fadeOut('slow');
        }
    });

    $("#readMorePara").hide();

    $('#readMore').click(function() {
        $("#readMorePara").toggle();
    });

    // Zoom image in detailed product
    $('.image > img').hide();
    $('#id11').show();
    $('#id1').on('click', ()=>{
        $('#id11').show();
        $('#id22').hide();
        $('#id33').hide();
        $('#id44').hide();
    });
    $('#id2').on('click', ()=>{
        $('#id22').show();
        $('#id11').hide();
        $('#id33').hide();
        $('#id44').hide();
    });
    $('#id3').on('click', ()=>{
        $('#id33').show();
        $('#id22').hide();
        $('#id11').hide();
        $('#id44').hide();
    });
    $('#id4').on('click', ()=>{
        $('#id44').show();
        $('#id22').hide();
        $('#id33').hide();
        $('#id11').hide();
    });

    // Cart value increase  

    $('.iconHeart').click(function() {
        $('#heartIncrease').html(function(i, val) { return val*1+1 });
    });

    $('.iconCart').click(function() {
        $('#cartIncrease').html(function(i, val) { return val*1+1 });
    });

    $('#dropdownMenuButton2').click(function() {
        $('#countNum').html(function(i, val) { return val*1+1 });
    });

    // COOKIES

    $(".cookies-wrapper").hide().delay(10000).fadeIn(900);

    const cookieBox = document.querySelector(".cookies-wrapper");
    acceptBtn = cookieBox.querySelector(".button-item");
    acceptBtn.onclick = ()=>{
      //setting cookie for 1 month, after one month it'll be expired automatically
      document.cookie = "CookieBy=Me; max-age="+60*60*24*30;
      if(document.cookie){ //if cookie is set
        cookieBox.classList.add("hide"); //hide cookie box
      }else{ //if cookie not set then alert an error
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
      }
    }
    let checkCookie = document.cookie.indexOf("CookieBy=Me"); //checking our cookie
    //if cookie is set then hide the cookie box else show it
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");

});


// cart items increase
$(document).ready(function(){
    $('.count').prop('disabled', true);
       $(document).on('click','.plus',function(){
        $('.count').val(parseInt($('.count').val()) + 1 );
    });
    $(document).on('click','.minus',function(){
        $('.count').val(parseInt($('.count').val()) - 1 );
            if ($('.count').val() == 0) {
                $('.count').val(1);
            }
        });
 });

 // product details tab

 $(document).ready(function(){
    $('#click-description').addClass('clicked-tab');
    $('#click-description').on('click', ()=>{
        $('#tabs-description').show();
        $('#tabs-add').hide();
        $('#tabs-reviews').hide();
        $('#click-add').removeClass('clicked-tab');
        $('#click-description').addClass('clicked-tab');
        $('#click-reviews').removeClass('clicked-tab');
    });
    $('#click-add').on('click', ()=>{
        $('#tabs-add').show();
        $('#tabs-description').hide();
        $('#tabs-reviews').hide();
        $('#click-add').addClass('clicked-tab');
        $('#click-description').removeClass('clicked-tab');
        $('#click-reviews').removeClass('clicked-tab');
    });
    $('#click-reviews').on('click', ()=>{
        $('#tabs-reviews').show();
        $('#tabs-description').hide();
        $('#tabs-add').hide();
        $('#click-reviews').addClass('clicked-tab');
        $('#click-description').removeClass('clicked-tab');
        $('#click-add').removeClass('clicked-tab');
    });

});