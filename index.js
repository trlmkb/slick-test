$(document).ready(function () {
  // $('.image-carousel-for').slick({
  //   dots: false,
  //   centerMode: false,
  // });
     var forSlick = jQuery('.image-carousel-for').slick({
        arrows: true,
        dots: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                    fade: false
                }
            },
        ]
    });
    
    $('.image-carousel-for .tmx-image').removeClass('invisible');

    // Video
    $('.image-carousel-for video').each(function () {
        var video = $(this).get(0);
        video.onplay = function () {
            $(this).parent().addClass('playing');
        };
        video.onpause = function () {
            $(this).parent().removeClass('playing');
        };
        video.onended = function () {
            video.currentTime = 0;
            $(this).parent().removeClass('playing');
        };
    });

    // MODIFIED CODE BLOCK
    $('.image-carousel-for .flex-video-thumb').dblclick(function () {
        var video = $(this).find('video').get(0);
        video.play();
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }
    });

    // NEW CODE BLOCK
    forSlick.on('afterChange', function (event, slick, currentSlide) {
        const currentSlideDom = $(slick.$slides.get(currentSlide));

        $(currentSlideDom).find('video').each(function () {
            $(this).get(0).play();
        });
    });

    forSlick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        const slider = $(slick.$slider);

        slider.find('video').each(function () {
            $(this).get(0).pause();
        });
    });
});