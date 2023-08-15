$(function() {
    var currentValue = 0
    var isDrag = false
    var maxPrice = 70000
    var currentPrice = 0

    $('.bar-pointer').mousedown(function() {
        isDrag = true
        console.log('pressed')
    })

    $(document).mouseup(function() {
        isDrag = false
        enableTextSelection()
    })

    $('.price-bar').mousemove(function(e) {
        if(isDrag) {
            disableTextSelection()

            var elBase = $(this)
            var mouseX = e.pageX - elBase.offset().left

            if(mouseX < 0) {
                mouseX = 0
            }

            if(mouseX > elBase.width()) {
                mouseX = elBase.width()
            }

            $('.bar-pointer').css('left', (mouseX-13)+'px')

            currentValue = (mouseX / elBase.width()) * 100

            $('.price-bar-fill').css('width', currentValue+'%')

            currentPrice = (currentValue/100) * maxPrice
            $('.search-price').html('R$'+currentPrice)
        }
    })

    function disableTextSelection() {
        $('body').css('-webkit-user-select', 'none')
        $('body').css('-moz-user-select', 'none')
        $('body').css('-ms-user-select', 'none')
        $('body').css('-o-user-select', 'none')
        $('body').css('user-select', 'none')
    }

    function enableTextSelection() {
        $('body').css('-webkit-user-select', 'auto')
        $('body').css('-moz-user-select', 'auto')
        $('body').css('-ms-user-select', 'auto')
        $('body').css('-o-user-select', 'auto')
        $('body').css('user-select', 'auto')  
    }
})