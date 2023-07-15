$(function() {
    var element = $('div.box')

    element.css('background', 'green')

    function test () {
        element.css('color', 'red')
    }

    test()
})