$(function() {
    $('.contact_form').submit(function() {
        var container = $('.container')

        var content = 'Nome: ' + $('input[name=name').val() +
            '<hr>E-mail: ' + $('input[name=email').val() +
            '<hr>Telefone: '+ $('input[name=phone]').val()

        container.html(content)
        
        return false
    })
})