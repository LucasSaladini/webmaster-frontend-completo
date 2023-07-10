$(function() {
    var timer 

    $('a').click(function(e) {
        e.preventDefault()
        /* return false */
    })

    $(window).scroll(function() {
        //event when scroll occurs
    })

    $(window).resize(function() {
        console.log('Minha tela está sendo redimensionada')
        clearTimeout(timer)
        timer = setTimeout(function() {
            location.href = "http://127.0.0.1:5500/events_2/index.html"
        }, 1000)
    })

    $('.box').click(function(e) {
        e.stopPropagation()
    })

    $('body').click(function() {
        $('.box').css('background', 'red')
    })
})