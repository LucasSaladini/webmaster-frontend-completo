$(function() {
    $('.box').eq(0).append('<h3>Meu elemento adicionado dinamicamente</h3>')

    $('<h3>Um elemento novo</h3>').appendTo($('.box').eq(1))

    $('.box').prepend('<h5>Olá, mundo!</h5>')

    var t = 'Meu conteúdo após a div box'

    $('.box').after(t)
    $('.box').before(t)

    $('.box').eq(1).remove()
})