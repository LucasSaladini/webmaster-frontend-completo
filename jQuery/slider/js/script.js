$(function() {
    var currentIndex = 0
    var maxIndex = $('.slider img').length
    var delay = 5000

    initSlider()
    sliderClick()

    function initSlider() {
        for(var i = 0; i < maxIndex; i++) {
            if(i == 0) {
                $('.nav_bullets').append('<span></span>')
            } else {
                $('.nav_bullets').append('<span></span>')
            }
        }
        $('.slider img').each(function(i) {
                if(i == 0) {
                $(this).fadeIn()
                $(this).show()
                setInterval(function() {
                    changeSlider()
                }, delay)
            }
        })
    }

    function sliderClick() {
        $('.nav_bullets span').click(function() {
            $('.slider img').eq(currentIndex).stop().fadeOut(2000)
            currentIndex = $(this).index()
            $('.slider img').eq(currentIndex).stop().fadeIn(2000)
            $('.nav_bullets span').css('background-color', '#ccc')
            $(this).css('background-color', '#069')
        })
    }

    function changeSlider() {
        $('.slider img').eq(currentIndex).stop().fadeOut(2000)
        currentIndex +=1
        if(currentIndex == maxIndex)
            currentIndex = 0
        $('.nav_bullets span').css('background-color', '#ccc')
        $('.nav_bullets span').eq(currentIndex).css('background-color', '#069')
        $('.slider img').eq(currentIndex).stop().fadeIn(2000)
    }
})