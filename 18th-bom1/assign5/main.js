let div = document.createElement("div");
div.innerText="10";
document.body.append(div);
setInterval(() => {
    div.innerText -= 1;
    if(div.innerText==5){
        window.open("https://elzero.org","_blank","width=500,height=500,top=200,left=200")
    }
    if(div.innerText==0){
        clearInterval(1)
        window.open("https://elzero.org")
    }
}, 1000);