$(function() {
    openWindow()
    verifyCloseClick()

    function openWindow() {
        $('.btn').click(function(e) {
            e.stopPropagation()
            $('.bg').fadeIn()
        })
    }

    function verifyCloseClick() {
        var el = $('body, .closeBtn')

        el.click(function() {
            $('.bg').fadeOut()
        })

        $('.form').click(function(e) {
            e.stopPropagation()
        })
    }
})