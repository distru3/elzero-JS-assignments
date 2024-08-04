let div = document.createElement("div");
div.innerText="10";
document.body.append(div);
setInterval(() => {
    div.innerText -= 1;
    if(div.innerText==0){
        clearInterval(1)
    }
}, 1000);