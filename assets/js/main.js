// nav active
$('.nav-color').on('click', function () {
    $('.nav-color').removeClass('active');
    $(this).addClass('active');
});

// auto scroll
$('.page-scroll').on('click', function (e) {
    var Tujuan = $(this).attr('href');
    var elementTujuan = $(Tujuan);
    $('html, body').animate({
        scrollTop: elementTujuan.offset().top - 10 //agar pas dengan navbar
    }, 2000, 'easeInOutQuint'); //1250 kecepa1an animasi per milmeter dan gaya transis1
    e.preventDefault();

    //effect lain jquery easing
});

// owl carousel experience section
$(" .experience .container .owl-carousel").owlCarousel({
    loop: true,
    lazyLoad: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

var owl = $(' .experience .container .owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.btn-next').click(function () {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.btn-prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});

// end owl carousel experience secntion


$(document).ready(function () {
    // portfolio
    let $btns = $('.portfolio .button-group button');


    $btns.click(function (e) {

        $('.portfolio .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.portfolio .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.portfolio .button-group #btn1').trigger('click');

    $('.portfolio .grid .test-popup-link').magnificPopup({
        type: 'image',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        gallery: {
            enabled: true
        }
    });


    // $('.site-main .testimoni .contianer .owl-carousel').owlCarousel({
    //     loop: true,
    //     autoplay: true,
    //     dots: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         560: {
    //             items: 1
    //         }
    //     }
    // });

});
$(" .testimoni .container .owl-carousel").owlCarousel({
    loop: true,
    lazyLoad: true,
    autoplay: true,
    dots: true,
    removalDelay: 300,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});