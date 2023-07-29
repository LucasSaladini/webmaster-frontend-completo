$(function() {
    /*var timer

    var timeout = function () {
        $('.box2').animate({
            'width': '40%',
            'height': '500px',
            'paddingTop': '200px',
            'marginLeft': '100px'
        }, 2000)
    }

    $('body').click(function() {
        alert("Animação com timeout foi cancelada")
        clearTimeout(timer)
    })

    $('.box1').animate({
        'width': '40%',
        'height': '500px',
        'paddingTop': '200px',
        'marginLeft': '100px'
    }, 2000, function() {
        timer = setTimeout(timeout, 3000) 
    })*/

    var timer
    
    $('body').click(function() {
        console.log('Intervalo cancelado')
        clearInterval(timer)
    })

    timer = setInterval(() => {
        alert("Olá, mundo")
    }, 3000);
})