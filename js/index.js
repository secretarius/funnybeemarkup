const clockContainer = document.querySelector('.clock');
setInterval(function() {
    clockContainer.innerText = (new Date()).toLocaleTimeString();
}, 10);

window.addEventListener('load', getCurrency)
document.querySelector('.update-currency')
    .addEventListener('click', getCurency)
function getCurrency(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState ===4 && xhr.status===200){
            const currency = JSON.parse(xhr.responseText);
            document.querySelector('.currency-continer')
                .innerText = currency.USD_UAH.val;
        }
    }
    xhr.open('GET', 'https://free.currencyconverterapi.com/api/v6/convert?q=USD_UAH&compact=y', true)
    xhr.send();
}