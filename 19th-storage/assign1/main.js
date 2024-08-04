let select1 = document.getElementById("font");
let select2 = document.getElementById("color");
let select3 = document.getElementById("size");
let div = document.getElementsByTagName("div")[0]


select1.onchange = function(){
    window.localStorage.setItem("font",select1.value);
    div.style.fontFamily = select1.value
}
select2.onchange = function(){
    window.localStorage.setItem("color",select2.value);
    div.style.backgroundColor = select2.value
}
select3.onchange = function(){
    window.localStorage.setItem("size",select3.value);
    div.style.fontSize = select3.value
}

    div.style.fontFamily = window.localStorage.getItem("font")
    select1.value = window.localStorage.getItem("font")
    div.style.backgroundColor = window.localStorage.getItem("color")
    select2.value = window.localStorage.getItem("color")
    div.style.fontSize = window.localStorage.getItem("size")
    select3.value = window.localStorage.getItem("size")
