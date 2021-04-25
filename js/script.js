let time = 5000;
let imgindex = 0;
let imagem = document.querySelectorAll("#slide img");
let max = imagem.length;
console.log(max)

function nextImage(){
    imagem[imgindex].classList.remove('selected');
    imgindex ++
    if(imgindex >= max)
        imgindex = 0;
    imagem[imgindex].classList.add('selected');
}

function start(){
    setInterval(() => {
        nextImage()
    },time)
}
window.addEventListener("load", start)

function proximo(){
    imagem[imgindex].classList.remove('selected');
    imgindex ++
    if(imgindex >= max)
        imgindex = 0;
    imagem[imgindex].classList.add('selected');

}
function anterior(){
    imagem[imgindex].classList.remove('selected');
    imgindex = imgindex - 1
    if(imgindex < 0)
        imgindex = max -1;
    imagem[imgindex].classList.add('selected');

}