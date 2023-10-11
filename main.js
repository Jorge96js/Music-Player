window.addEventListener('DOMContentLoaded', main);

function main(){
    player()
}

function player(){

    let play =  document.getElementById('btn-play');
    play.addEventListener('click', ()=>{
        if(play.classList.contains('bi-play-fill')){
            play.classList.remove('bi-play-fill')
            play.classList.add('bi-pause-fill')
        }else{
            play.classList.remove('bi-pause-fill')
            play.classList.add('bi-play-fill')
        }
    })
}