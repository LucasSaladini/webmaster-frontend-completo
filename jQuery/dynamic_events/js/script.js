$(function() {
    /*$('body').on('click', 'a', function() {
        alert('Olá mundo')
        return false
    })

    setTimeout(function() {
        $('body').html('<a href="">Meu link</a>')
    }, 3000)*/

    var func = function() {
        console.log($(this).index())
    }

    $('input[type=text]').keyup(func)

})