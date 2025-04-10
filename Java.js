let isPlaying = false;
const playPauseBtn = document.getElementById('play-pause-btn');

function playRadio() {
    // Adicionar a URL do stream aqui
    const audio = new Audio('url_do_stream_aqui');
    audio.play();
    isPlaying = true;
    playPauseBtn.innerHTML = 'Pause';
}

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        playPauseBtn.innerHTML = 'Play';
    } else {
        audio.play();
        isPlaying = true;
        playPauseBtn.innerHTML = 'Pause';
    }
}
