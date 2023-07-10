$(function() {
    setTimeout(function() {
        $('#test.article1').css('background', 'green')
    }, 2000)
})

$(function() {
    setTimeout(function() {
        $('.article1 > p').css('color', 'white')
    }, 2000)
})

$(function() {
    console.log($('.article1 > p').css('color'))
})