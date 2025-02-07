const imgs = document.getElementById("fotos");
const img = document.querySelectorAll("#fotos img");

let idx = 0;

function carrossel(){
    idx++

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 200}px)`;
}

setInterval(carrossel, 2500);