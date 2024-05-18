
const container=document.querySelector(".container");
const customcolor=document.querySelector("#custom-color");
const choose=document.querySelector(".choose");
const squareglobal=document.querySelector(".square");
function creategrid(size){
    container.innerHTML="";
    const squareSize = 600 / size;
    for(let i=0;i<size*size;i++){
        const square=document.createElement("div");
        square.classList.add("square");
        square.style.width=`${squareSize}px`;
        square.style.height=`${squareSize}px`;
        container.appendChild(square);
        square.addEventListener("mouseover",()=>{square.style.backgroundColor="black"});
        choose.addEventListener("click",()=>{
            const color=customcolor.value;
            square.addEventListener("mouseover",()=>{square.style.backgroundColor=`${color}`});
            // square.style.backgroundColor=`${color}`;
        });
    }
}
document.addEventListener("DOMContentLoaded",()=>{
    creategrid(16);
   
});



