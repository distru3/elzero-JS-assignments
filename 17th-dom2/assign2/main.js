let add = document.querySelector(".adding-input");
let rem = document.querySelector(".rem");
let current = document.querySelector("#current");
let ava = document.querySelector(".ava");
function func(){
    document.querySelectorAll("span").forEach(ele => ele.remove());
    ava.innerText="";
    for(let i = 0; i < this.value.trim().split(" ").length; i++){
        if(add.value){
            current.classList.add(add.value.toLowerCase().trim().split(" ")[i])
        }
        if(rem.value){
            current.classList.remove(rem.value.toLowerCase().trim().split(" ")[i])
        };
    }
    this.value = "";
    if(current.classList.length){
        [...current.classList].sort().forEach(element => {
            let sp = document.createElement("span");
            sp.innerText = element;
            ava.append(sp);
        });
    }else ava.textContent = "No Classes Found"
}

function display(){
    if(current.classList.length){
        [...current.classList].sort().forEach(element => {
            let sp = document.createElement("span");
            sp.innerText = element;
            ava.append(sp);
        });
    }else ava.innerText = "No Classes Found"
}

window.onload = display;
add.onblur = func;
rem.onblur = func;