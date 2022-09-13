const myButton = document.querySelector("button");
const body = document.body;
const colorText = document.querySelector(".color-discription");
function randomColorGen(){
const red = Math.floor(Math.random()*256);
const green = Math.floor(Math.random()*256);
const blue = Math.floor(Math.random()*256);
const randomColor = `rgb(${red},${green},${blue})`;
return randomColor;
}
myButton.addEventListener('click',()=>{
    const randomColor = randomColorGen();
    colorText.textContent = randomColor;
    body.style.backgroundColor = randomColor;
});