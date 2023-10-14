window.addEventListener('DOMContentLoaded', main);

function main(){
    player();
}

function player(){

    let song = document.getElementById('1')
    let play =  document.getElementById('btn-play');
    play.addEventListener('click', handlePlay, false);

    const songsPath = [['/songs/POLKADOT-STINGRAY-Zenchi-Zenno/01Telecaster-Stripe.mp3'],['/songs/POLKADOT-STINGRAY-Zenchi-Zenno/02BLUE.mp3'],['/songs/POLKADOT-STINGRAY-Zenchi-Zenno/03Ningyo.mp3']]
    let currentSong = 0;
    let skip = document.getElementById('skip');
    let skip_start = document.getElementById('skip-start')

    skip.addEventListener('click', ()=>{
        currentSong++
            song.src = songsPath[currentSong]
    })
    skip_start.addEventListener('click', ()=>{
        currentSong--
            song.src = songsPath[currentSong]
    })

    /**************************/
     async function playSong(){
        try{
            await song.play()
            play.classList.remove('bi-play-fill')
            play.classList.add('bi-pause-fill')
            progressBar()
        }catch{
            console.error("Error")
        }
    }

    function handlePlay(){
        if(song.paused){
            playSong();
        }else{
            song.pause()
            play.classList.remove('bi-pause-fill')
            play.classList.add('bi-play-fill')
        }
    }

    function progressBar(){
        let audio = document.querySelector('audio');
        let progressBar = document.querySelector('.progreso')
        audio.addEventListener('timeupdate', () => {
            const currentTime = audio.currentTime;
            const duration = audio.duration;
            const progress = (currentTime / duration) * 100;
            progressBar.style.width = progress + '%';
        });
    }
}


let favBtn = document.querySelector('.fav-btn');

    favBtn.addEventListener('click',()=>{
        favBtn.classList.toggle('fav-btn_active');
    })




