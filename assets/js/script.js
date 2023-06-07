$(document).ready(function(){
    phoneSliders()
    sliders()
});




const toggle = $('#menu-toggle')
const cross = $('#crossNav')
const navbar = $('.mobile-nav')
var nav = false;


cross.click(function () {
    navbar.fadeOut('fast')
    nav = false;
})

toggle.click(function () {
    if (nav == false) {
        $('.mobile-nav').fadeIn('fast');
        nav = true
    }
    else {
        $('.mobile-nav').fadeOut('fast');
        nav = false
    }

})



function phoneSliders() {
    if ($(window).width() < 767) {
        $('.phoneSliders').addClass('slide')
    }   
}

function sliders(){
    $('.slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: false,
        

    })
}


// fancy box
Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });



