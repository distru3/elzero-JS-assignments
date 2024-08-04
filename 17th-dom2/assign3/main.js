let element = document.querySelector("div");
let p = document.querySelector("p");
let pre = document.createElement("div");
pre.className = "start";
pre.title = "start-element";
pre.innerText = "start"
let ape = document.createElement("div");
ape.className = "end";
ape.title = "end-element";
ape.innerText = "end"
document.body.append(ape);
document.body.prepend(pre);
document.body.removeChild(p);