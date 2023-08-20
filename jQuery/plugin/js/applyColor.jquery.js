//Plugin
$.fn.applyColor = function(options) {
    var settings = $.extend({
        color: "#556B2F",
        backgroundColor: "white"
    }, options)

    return this.css({
        color: settings.color,
        backgroundColor: settings.backgroundColor
    })
}