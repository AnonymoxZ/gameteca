const videoShow = document.querySelector('.videos-grid');


function changeToGame(){
    videoShow.innerHTML = ``;
    videoShow.innerHTML += `
    <li class="video-element">
    <div class="video">
    <video controls="controls">
        <source src="/media/videos/gameplay.mp4">
    </video>
    <span class="title-description">
        <h3>Pongo - Um clássico retrogame feito em Scratch</h3>
    </span>
    </div>
    </li>
    `;
};

function changeToWeb(){
    videoShow.innerHTML = `<h3 id='status-page'>Ainda estamos trabalhando nisso  ¯&#92_(ツ)_/¯</h3>`;
}


function changeToHack(){
    videoShow.innerHTML = ``;
    videoShow.innerHTML += `
    <li class="video-element">
    <div class="video">
    <video controls="controls">
        <source src="/media/videos/keylogg01.mp4">
    </video>
    <span class="title-description">
        <h3>KeyGhost - Keylogger em Python</h3>
    </span>
    </div>
    </li>
    `;
    
}

function changeToAll(){
    videoShow.innerHTML = ``;
    videoShow.innerHTML += `
    <li class="video-element">
    <div class="video">
    <video controls="controls">
        <source src="/media/videos/gameplay.mp4">
    </video>
    <span class="title-description">
        <h3>Pongo - Um clássico retrogame feito em Scratch</h3>
    </span>
    </div>
    </li>
    <li class="video-element">
    <div class="video">
    <video controls="controls">
        <source src="/media/videos/keylogg01.mp4">
    </video>
    <span class="title-description">
        <h3>KeyGhost - Keylogger em Python</h3>
    </span>
    </div>
    </li>
    `;
}
