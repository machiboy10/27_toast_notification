const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three', 
    'Message Four',
]

const types = [
    'info',
    'success',
    'error',
]

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())
    //el.innerHTML = '<div class="toast">Hello World</div>'
    // toasts.appendChild(notif) ' appenchild - vanilla js
    notif.innerText =  message ? message : getRandomMessage()
    // append - part of jquery but now included in the js
    toasts.append(notif) 

    setTimeout(()=> {
        notif.remove()
    }, 3000)
   
}

function getRandomMessage () {
   
     return messages[Math.floor(Math.random() * messages.length)]
} 
function getRandomType() {
    
    return types[Math.floor(Math.random() * types.length)]
}