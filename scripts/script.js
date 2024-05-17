const container=document.querySelector(".container");
for(let i=0;i<256;i++){
        const square=document.createElement("div");
        square.classList.add("square");
        square.textContent=i;
        container.appendChild(square);
        console.log("yep");
}

