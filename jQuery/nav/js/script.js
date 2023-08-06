$(function() {
    verifyMenuClick()

    function verifyMenuClick() {
        $('a').click(function() {
            var href = $(this).attr('href')

            $.ajax({
                'beforeSend': function() {
                    console.log('Calling before send')
                },
                'timeout': 10000,
                'url':href,
                'error': function(jqXHR, textStatus, errorThrown) {
                    if(jqXHR.statusText = 'Not Found') {
                        console.log('Página não encontrada')
                    }
                },
                'success': function(data) {
                    $(data).appendTo('#container').fadeIn()
                }
            })

            return false
        })
    }
})