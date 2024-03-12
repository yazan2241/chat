const dataElement = document.querySelector('.data');
const player = document.querySelector('.video-js');
const chat = document.querySelector('#chat');
const chatItem = document.querySelector('.chatItem');
const wrapper = document.querySelector('.videowrapper')


let messages = [

];

let key = "messages";



window.onload = function () {
    if (localStorage.getItem(key) !== null) {
        messages = JSON.parse(localStorage.getItem(key));
    }
    handleFullScreenOverlay();
    init();
}

function init() {
    dataElement.innerHTML = '';
    messages.map(item => {
        dataElement.insertAdjacentHTML('afterbegin', `
            <div class="flex items-center p-2">
                <img src="images/profile.png" class="rounded-full w-8 bg-[#31C4BE] p-[1px]" />
                <p class="text-white bg-[#3F5560] rounded-r-lg rounded-bl-lg p-2 mt-2 mx-2">${item.message}</p>
            </div>
        `)
    });




}

function handleFullScreenOverlay() {
    video = videojs('my-video');

    let fullScreen = document.querySelector('.vjs-fullscreen-control');
    let nFullscreen = document.createElement('button');
    nFullscreen.id = 'nFullscreen';
    nFullscreen.type = "button";
    fullScreen.parentNode.insertBefore(nFullscreen, fullScreen.nextSibling);
    nFullscreen.append(fullScreen);
    fullScreen.disabled = 'disabled';
    fullScreen.style.pointerEvents = "none";


    document.querySelector('#nFullscreen').addEventListener('click', evt => {
        toggleFullScreen();
    });
}

function toggleFullScreen() {
    if (document.fullscreenElement == wrapper) {
        if (wrapper.exitFullscreen) {
            wrapper.exitFullscreen();
        } else if (wrapper.mozExitFullScreen) {
            wrapper.mozExitFullScreen();
        } else if (wrapper.webkitExitFullscreen) {
            wrapper.webkitExitFullscreen();
        }
    }
    if (wrapper.requestFullscreen) {
        wrapper.requestFullscreen();
    } else if (wrapper.mozRequestFullScreen) {
        wrapper.mozRequestFullScreen();
    } else if (wrapper.webkitRequestFullscreen) {
        wrapper.webkitRequestFullscreen();
    }
}

function addMessage() {
    let message = document.getElementById('message');
    messages.push({
        id: '1234-1234-1234',
        message: message.value
    });
    init();
    message.value = '';

    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(messages));
}


player.addEventListener('play', evt => {
    chatItem.classList.remove('hidden');

});


player.addEventListener('pause', evt => {
    chatItem.classList.add('hidden');
    chat.classList.add('hidden');
});





chatItem.addEventListener('click', evt => {

    if (chat.classList.contains('hidden'))
        chat.classList.remove('hidden');
    else
        chat.classList.add('hidden');
});