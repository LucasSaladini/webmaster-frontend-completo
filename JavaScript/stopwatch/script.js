var display = document.getElementById("display")
var minutes = document.getElementById('minutes')
var seconds = document.getElementById('seconds')
var start = document.getElementById('start')

var stopwatchSeconds

var currentMinute
var currentSecond

var interval

for (var i = 0; i <= 60; i++) {
    minutes.innerHTML+='<option value="' + i + '">' + i + '</option>'
}

for (var i = 0;  i <= 60; i++) {
    seconds.innerHTML+='<option value="' + i + '">' + i + '</option>'
}

start.addEventListener('click', () => {
    currentMinute = minutes.value
    currentSecond = seconds.value

    display.childNodes[1].innerHTML = currentMinute + ":" + currentSecond

    interval = setInterval(() => {
        currentSecond--
        if(currentSecond <= 0) {
            if(currentMinute > 0) {
                currentMinute--
                currentSecond = 59
            } else {
                alert("Acabou!")
                document.getElementById("sound").ATTRIBUTE_NODE.play()
                clearInterval(interval)
            }
        }

        display.childNodes[1].innerHTML = currentMinute + ":" + currentSecond
    }, 1000)
})