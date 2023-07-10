$(function() {
    function validateClickHover() {

        $('.article1').click(function() {
            $('.article2').css('background', 'purple')
        })
        
        $('.article1').hover(function() {
            $('.article2').css('background', 'red')
        }, function() {
            $('.article2').css('background', 'rgb(100, 100, 100)')
        })
    }

    function validateForm() {
        $('textarea').focus(function() {
            console.log('Estou dentro do textarea')
        }).blur(function() {
            console.log('Estou fora do textarea')
        })
        
        $('select').change(function() {
            console.log('Meu select foi alterado')
        })
    }

    validateClickHover()
    validateForm()
})