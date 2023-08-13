$(function() {
    var delay = 3000
    var currentIndex = 0
    var qty = $('.about__author').length

    initSlider()
    autoPlay()

    function initSlider() {
        var sizeContainer = 100 * qty
        var sizeBoxSingle = 100 / qty

        $('.about__author').css('width', sizeBoxSingle+'%')
        $('.scroll__wrapper').css('width', sizeContainer+'%')

        for (var i = 0; i < qty;  i++) {
            if(i == 0 ) {
                $('.slider__bullets').append('<span style="background: rgb(170, 170, 170);"></span>')
            } else {
                $('.slider__bullets').append('<span></span>')
            }
        }
    }

    function autoPlay() {
        setInterval(function() {
            currentIndex++
            
            if (currentIndex == qty) {
                currentIndex = 0
            }
            goToSlider(currentIndex)
        }, delay)
    }

    function goToSlider(currentIndex) {
        var offsetX = $('.about__author').eq(currentIndex).offset().left - $('.scroll__wrapper').offset().left

        $('.slider__bullets span').css('background', 'rgb(200, 200, 200)')
        $('.slider__bullets span').eq(currentIndex).css('background', 'rgb(170, 170, 170)')
        $('.scroll__team').stop().animate({
            'scrollLeft': offsetX+'px'
        })
    }

    $(window).resize(function() {
        $('.scroll__team').stop().animate({
            'scrollLeft': 0
        })
    })
})
