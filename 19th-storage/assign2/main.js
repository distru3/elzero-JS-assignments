let inp = document.querySelector("input");
let sel = document.querySelector("select");
inp.oninput = function(){
    window.sessionStorage.setItem("inp", inp.value)
}

sel.onchange = function(){
    window.sessionStorage.setItem("sel" , sel.value)
}

sel.value = window.sessionStorage.getItem("sel") 
inp.value = window.sessionStorage.getItem("inp") 