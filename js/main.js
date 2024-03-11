const dataElement = document.querySelector('.data');

let messages = [
    
];

let key = "messages";

window.onload = function () {
    if (localStorage.getItem(key) !== null) {
        messages = JSON.parse(localStorage.getItem(key));
    }
    console.log(messages);
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


