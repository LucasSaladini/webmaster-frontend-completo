$(function() {
    $.ajax({
        'url': 'content.html',
        //'method': 'get',
        //'data': {'name': 'lucas', 'age': '29'}
    }).done(function(data) {
        $('#container').append(data)
    })
})