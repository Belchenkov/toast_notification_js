const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five'
];

const types = [
    'info',
    'warning',
    'error',
    'success'
];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
    const notice = document.createElement('div');

    notice.classList.add('toast');
    notice.classList.add(type ?? getRandomType());
    notice.innerText = message ?? getRandomMessage();

    toasts.appendChild(notice);

    setTimeout(() => {
       notice.remove();
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}