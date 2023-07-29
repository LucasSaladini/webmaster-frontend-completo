$(function() {
    $('.box1').addClass('myclass')

    //$('.myclass').remove()

    //$('.box1').removeClass('myclass')

    var el = $('.box1').find('.child1').find('.child2')

    el.css('color', 'green')

    $('mytag').attr('myattr', 'newvalue')

    alert($('mytag').attr('myattr'))
})