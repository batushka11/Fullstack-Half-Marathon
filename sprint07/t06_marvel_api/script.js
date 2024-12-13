const btn = document.querySelector('button');

function get(data){
    let res = '';
    for(let key in data) {
        if(typeof data[key]  === "object") {
            res += `<div class="wrapper"><b class="key">${key}</b>: ${get(data[key])}</div>`;
        } else {
            res += `<div class="wrapper"><b>${key}</b>: ${data[key]}</div>`;
        }
    }
    return res;
};

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    e.target.setAttribute('disabled', true);
    fetch('/show')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#content').innerHTML = get(data)
        })
});