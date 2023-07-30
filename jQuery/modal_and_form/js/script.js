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

    $('form#register').submit(function(e) {
        e.preventDefault()

        var name = $('input[name=name').val()
        var phone = $('input[name=phone').val()
        var email = $('input[name=email').val()

        //Contando a quantidade de espaços e os respectivos valores
        var amount = name.split(' ').length
        var splitStr = name.split(' ')

        if(amount >= 2) {
            for(var i = 0; i < amount; i++) {
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {
                    console.log('Nossa condição bateu, continuar')
                } else {
                    applyInvalidField($('input[name=name'))
                    return false
                }
            }
        } else {
            applyInvalidField($('input[name=name'))
            return false
        }

        function applyInvalidField(el) {
            el.css('border', '2px solid red')
            el.val('Campo inválido')
            el.data('invalid', 'true')
        }
    })
})