const images = document.querySelectorAll('img[data-src]');
const height = document.documentElement.clientHeight;
const span = document.getElementById("cnt");
const box = document.querySelector(".box")
let cnt = 0;

let imagesPositions = [];

if(images.length > 0){
    images.forEach(image => {
        if(image.dataset.src){
            imagesPositions.push(image.getBoundingClientRect().top + pageYOffset);
            scrollCheck();
        }
    })
}

function scrollCheck(){
    let index = imagesPositions.findIndex(
        elem => pageYOffset > elem - height
    );
    if(index >= 0){
        if(images[index].dataset.src){
            images[index].src = images[index].dataset.src;
            images[index].removeAttribute('data-src');
            cnt++;
        }
        span.innerHTML = `${cnt}`;
        delete imagesPositions[index];
    }
    if(cnt === 20){
        box.style.backgroundColor = "green";
        setTimeout(deleteBox,3000);
    }
}

function deleteBox(){
    box.style.display = "none";
}

window.addEventListener("scroll",windowScroll);

function windowScroll(){
    if(document.querySelectorAll('img[data-src]').length > 0){
        scrollCheck();
    }
}