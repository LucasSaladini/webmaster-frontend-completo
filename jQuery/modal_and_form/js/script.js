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

    $('input').focus(function() {
        resetInvalidField($(this))
    })

    $('form#register').submit(function(e) {
        
        var name = $('input[name=name').val()
        var phone = $('input[name=phone').val()
        var email = $('input[name=email').val()

        if(verifyName(name) == false) {
            applyInvalidField($('input[name=name]'))
            return false
        } else if(verifyPhone(phone) == false) {
            applyInvalidField($('input[name=phone]'))
            return false
        } else if(verifyEmail(email) == false) {
            applyInvalidField($('input[name=email]'))
            return false
        } else {
            alert('Formulário enviado com sucesso!')
        }
    })

    function verifyName(name) {
        //Contando a quantidade de espaços e os respectivos valores
        if(name == '') {
            return false
        }

        
        var amount = name.split(' ').length
        var splitStr = name.split(' ')

        if(amount >= 2) {
            for(var i = 0; i < amount; i++) {
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {
                    console.log('Nossa condição bateu, continuar')
                } else {
                    return false
                }
            }
        } else {
            return false
        }
    }

    function verifyPhone(phone) {
        if(phone == '') {
            return false
        }

        if(phone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null) {
            return false
        }
    }

    function verifyEmail(email) {
        if(email == '') {
            return false
        }

        if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null) {
            return false
        }
    }

    function applyInvalidField(el) {
        el.css('color', 'red')
        el.css('border', '2px solid red')
        el.val('Campo inválido')
        //el.data('invalid', 'true')
    }

    function resetInvalidField(el) {
        el.css('color', '#ccc')
        el.css('border', '1px solid #ccc')
        el.val('')
    }
})