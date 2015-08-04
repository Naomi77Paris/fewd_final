/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */





(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict





jQuery( document ).ready(function( $ ) {

     $('.on').show(2000);

    //when document loads goes from off to on 
    $("#home-semicircle-pointer").addClass('first-rotation');
   

    $( ".first-position" ).click(function(e) {
      // $("#home-semicircle-pointer").removeClass().addClass('ease-rotation');
      $('.home-info-block').hide();
      $('.on').show(2000);
    });

    $( ".second-position" ).click(function() {
      // $("#home-semicircle-pointer").removeClass().addClass('second-rotation ease-rotation');
      $('.home-info-block').hide();
      $('.we').show(2000);
    });

    $( ".third-position" ).click(function() {
      // $("#home-semicircle-pointer").removeClass().addClass('third-rotation ease-rotation');
      $('.home-info-block').hide();
      $('.wd').show(2000);
    });

    $( ".fourth-position" ).click(function() {
      // $("#home-semicircle-pointer").removeClass().addClass('fourth-rotation ease-rotation');
      $('.home-info-block').hide();
      $('.fe').show(2000);
    });

    $( ".fifth-position" ).click(function() {
      // $("#home-semicircle-pointer").removeClass().addClass('fifth-rotation ease-rotation'); 
      $('.home-info-block').hide();
      $('.off').show(2000);
    });

});//Closes Doc Ready   