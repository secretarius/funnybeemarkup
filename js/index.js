const clockContainer = document.querySelector('.clock');
setInterval(function() {
    clockContainer.innerText = (new Date()).toLocaleTimeString();
}, 10);
