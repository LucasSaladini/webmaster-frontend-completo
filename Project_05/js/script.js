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
            currentPrice = formatPrice(currentPrice)

            $('.search-price').html('R$'+currentPrice)
        }
    })

    function formatPrice(currentPrice) {
        currentPrice = currentPrice.toFixed(2)
        price_arr = currentPrice.split('.')

        var newPrice = formatAll(price_arr)

        return newPrice
    }

    function formatAll(price_arr) {
        if(price_arr[0] < 1000) {
            return price_arr[0]+','+price_arr[1]
        }else if(price_arr[0] < 10000) {
            return price_arr[0][0]+'.'+price_arr[0].substr(1, price_arr[0].length)+','+price_arr[1]
        }else{
            return price_arr[0][0]+price_arr[0][1]+'.'+price_arr[0].substr(2, price_arr[0].length)+','+price_arr[1]
        }
    }

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

    var imgShow = 3
    var maxIndex = Math.ceil($('.mini-img-wrapper').length / 3) -1 
    var curIndex = 0

    initSlider()
    navigateSlider()
    clickSlider()

    function initSlider() {
        var amount = $('.mini-img-wrapper').length * 33.3
        var elScroll = $('.gallery-nav-wrapper')
        var elSingle = $('.mini-img-wrapper')
        
        elScroll.css('width', amount+'%')
        elSingle.css('width', 33.3*(100/amount)+'%')
    }

    function navigateSlider() {
        $('.arrow-right-nav').click(function() {
            if(curIndex < maxIndex) {
                curIndex++

                var elOff = $('.mini-img-wrapper').eq(curIndex * 3).offset().left - $('.gallery-nav-wrapper').offset().left
                
                $('.gallery-nav').animate({
                    'scrollLeft': elOff+'px'
                })
            }
        })

        $('.arrow-left-nav').click(function() {
            if(curIndex > 0) {
                curIndex--

                var elOff = $('.mini-img-wrapper').eq(curIndex * 3).offset().left - $('.gallery-nav-wrapper').offset().left

                $('.gallery-nav').animate({
                    'scrollLeft': elOff+'px'
                }) 
            }
        })
    }

    function clickSlider() {
        $('.mini-img-wrapper').click(function() {
            $('.mini-img-wrapper').css('background-color', 'transparent')
            $(this).css('background-color', 'rgb(210, 210, 210)')

            var img = $(this).children().css('background-image')
            
            $('.highlight-photo').css('background-image', img)
        })

        $('.mini-img-wrapper').eq(0).click()
    }

    // $('[goto=contact').click(function() {
    //     $('nav a').css('color', 'black')
    //     $(this).css('color', '#EB2D2D')

    //     $('html, body').animate({
    //         'scrollTop': $('#contact').offset().top
    //     })

    //     return false
    // })

    var directory  = 'http://127.0.0.1:5500/'

    $('[goto=contact]').click(function() {
        location.href = directory+'?contact'
        return false
    })

    checkUrl()

    function checkUrl() {
        var url = location.href.split('/')
        var curPage = url[url.length - 1].split('?')

        if(curPage[1] != undefined && curPage[1] == 'contact') {
            //$('header nav a').css('color', 'black')
            //$('footer nav a').css('color', 'white')
            $('[goto=contact').css('color', '#EB2D2D')
            $('html, body').animate({
                'scrollTop': $('#contact').offset().top
            })
        } else {
            $('a[href='+curPage[0]+']').css('color', '#EB2D2D')
        }
    }

    $('.mobile').click(function() {
        $(this).find('ul').slideToggle()
    })

    navigateReviews()
    initReviews()

    var amountReview = $('.review-single p').length
    var curIndexReview = 0

    function initReviews() {
        $('.review-single p').hide()
        $('.review-single p ').eq(0).show()
    }

    function navigateReviews() {
        $('[next]').click(function() {
            curIndexReview++

            if(curIndexReview >= amountReview)
                curIndexReview = 0

            $('.review-single p').hide()
            $('.review-single p').eq(curIndexReview).show()
            
        })

        $('[prev]').click(function() {
            curIndexReview--

            if(curIndexReview < 0)
                curIndexReview = amountReview - 1
            
            $('.review-single p').hide()
            $('.review-single p').eq(curIndexReview).show()
        })
    }
})