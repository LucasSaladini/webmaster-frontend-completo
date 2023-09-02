var audioPlayer = document.getElementById('audioplayer')
var loaded = false

var playBtn = document.getElementById('playBtn')
var pauseBtn = document.getElementById('pauseBtn')

pauseBtn.addEventListener('click', (e) => {
    e.preventDefault()

    playBtn.style.display = 'inline'
    pauseBtn.style.display = 'none'
    audioPlayer.pause()
    return false
})

playBtn.addEventListener('click', (e) => {
    e.preventDefault()

    playBtn.style.display = 'none'
    pauseBtn.style.display = 'inline'
    audioPlayer.play()
    return false
})

const playSong = (file) => {
    if(loaded == false) {
        audioPlayer.innerHTML = `<source src="`+file+`" type="audio/mp3" />`
        loaded = true
    }

    audioPlayer.load()

    playBtn.style.display = 'none'
    pauseBtn.style.display = 'inline'
}

document.querySelectorAll('.main_col').forEach(item => {
    item.addEventListener('click', event => {
        let image = item.getAttribute('data-image')
        let artist = item.getAttribute('data-artist')
        let song = item.getAttribute('data-song')
        let file = item.getAttribute('data-file')

        let playerArtistComponent = document.getElementsByClassName('player_artist')

        playerArtistComponent[0].innerHTML =  `
            <img src="`+image+`" />
            <h3>`+artist+`<br /><span>`+song+`</span></h3>
        `
        playSong(file)
    })

})

audioPlayer.onloadstart = () => {
    // alert('Começou a carregar.')
}

audioPlayer.oncanplaythrough = function() {
    // alert("Can start playing video")
    audioPlayer.play()
    alert(audioPlayer.duration)
}

audioPlayer.addEventListener('timeupdate', (e) => {
    var currentTime = audioPlayer.currentTime
    // console.log(currentTime)
    // console.log((currentTime / audioPlayer.duration) * 100)
    var progressBar = document.getElementsByClassName('player_control_progress_2') 
    var width = 0
    var advance = setInterval(slide, 302.96)

    function slide() {
        if (width == 100) {
            clearInterval(width)
        } else {
            width++
            progressBar.style.width = width + '%'
        }
    }
})