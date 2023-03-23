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

$(".progressElement").waypoint(function() {

    // code to execute when the waypoint is triggered
    $(".progress-bar").each(function () {
        $(this).animate({
            width: $(this).attr("aria-valuenow") + "%"
        }, 1000);
    });
    this.destroy();
  }, { offset: 'bottom-in-view' });
  
  


// $(document).ready(function () {
//     $(".progress-bar").each(function () {
//         $(this).animate({
//             width: $(this).attr("aria-valuenow") + "%"
//         }, 1500)
//     });

// })






