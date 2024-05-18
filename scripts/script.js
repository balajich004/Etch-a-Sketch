
const container=document.querySelector(".container");
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
    }
}
document.addEventListener("DOMContentLoaded",()=>{
    creategrid(16);
});



