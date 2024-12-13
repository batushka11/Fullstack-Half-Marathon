const select = document.querySelectorAll('select');
const submit = document.querySelector('#submit');

window.onload = function (){
    select.forEach(item => {
        item.addEventListener('change', () => {
            sendFilter();
        })
    })
    function sendFilter(){
        submit.click();
    }
}
