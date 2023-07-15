$(function() {
    var el = $('.box')

    var text = "Olá, mundo"
    var text1 = "Meu texto via JavaScript"

    el.html("<div class=\"test\">"+text+"</div>")
    el.html(el.html() + "<h1 class=\"text1\">"+text1+"</h1>")

    $(".box2").text("<div></div>")

    $('#input').val("Olá, mundo")

    $('input[type=button').click(function() {
        var string = $('#form_input').val()
        var split = string.split("@")
        console.log(split)

        var substring = string.substr(0,4)
        console.log(substring)

        if(split[1] == 'hotmail.com') {
            $('#form_input').css('opacity', '0')
        } else {
            console.log("A condição não bateu")
        }
    })
})