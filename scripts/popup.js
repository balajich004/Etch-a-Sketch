const setSize=document.querySelector(".grid-size");
const apply=document.querySelector(".apply-grid-size");
const close=document.querySelector(".close-popup");
const popup=document.querySelector(".popup");
const gridinput=document.getElementById("grid-size-input");
setSize.addEventListener("click", () => {
    popup.style.display="flex";
});
apply.addEventListener("click", () => {
    const value=parseInt(gridinput.value);
    if(value>=1 && value<=100){
        creategrid(value);
        popup.style.display="none";
    }
    else
    alert("please enter a number between 1 to 100");
});
close.addEventListener("click",()=>{
    popup.style.display="none";
})