
/*========================================================================
                    Show and Hide Navigation Color
==========================================================================*/
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();

    });

    function showHideNav() {

            
        if ($(window).scrollTop() > 100) {

            // Show White nav
            $("nav").addClass("bg-secondary");

            // Show Dark logo
            $(".navbar-brand img").attr("src", "image/logo/logo-dark.png");

            // Show back to top button
            // $("#back-to-top").fadeIn();
        } else {

            // Hide White nav
            $("nav").removeClass("bg-secondary");

            // Show logo
            $(".navbar-brand img").attr("src", "image/logo/logo.png");

            // Hide back to top button
            // $("#back-to-top").fadeOut();
        }
    }
});



/*=========================================
               Preloader
========================================*/

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(550).fadeOut();
});

// ========================================
//               Team Member
//=========================================

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 50,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
    });
});


//   =====================================
//                Progress Bars
//   =====================================

$(".progressElement").waypoint(function () {

    // code to execute when the waypoint is triggered
    $(".progress-bar").each(function () {
        $(this).animate({
            width: $(this).attr("aria-valuenow") + "%"
        }, 1000);
    });
    this.destroy();
}, { offset: 'bottom-in-view' });




$(document).ready(function () {
    $(".progress-bar").each(function () {
        $(this).animate({
            width: $(this).attr("aria-valuenow") + "%"
        }, 1500)
    });

})


// ===========================================
//                Service Tabs
//============================================

$('#service-tabs').responsiveTabs({
    startCollapsed: 'accordion'
});


/*=========================================
             Smooth Scrolling
========================================*/

$(function(){

    $(".smooth-scroll").click(function(event){

        event.preventDefault();

        // get section id like #home, #about, #team, #service and etc

        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top 
        }, 1000);
        
    });
});


/*=========================================
             Back to Top Arrow
========================================*/



$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});


$("#back-to-top").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
 });


/*========================================================
                    Animate on scroll
==========================================================*/

new WOW().init();

$(window).on('load', function(){
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
})
