
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body')
console.log(startBtnEl);

startBtnEl.addEventListener('click',addColorBody);
stopBtnEl.addEventListener('click',stopAddColorBody);
let idColor = null

function stopAddColorBody() {
     startBtnEl.disabled = false;
     stopBtnEl.disabled = true;
     clearInterval(idColor);
     console.log('hello');
}

function addColorBody(){
    idColor  = setInterval((() => {   
        bodyEl.style.backgroundColor = getRandomHexColor();
        startBtnEl.disabled = true;
        stopBtnEl.disabled = false;
    }),1000)    
   

}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`}
