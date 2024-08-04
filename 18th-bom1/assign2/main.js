let div = document.createElement("div");
div.style.cssText = `
position:absolute;
top:50%;
left:50%;
background-color:#ddd;
padding:20px;
text-align:center;
width:400px;
transform:translate(-50%,-50%);`
let h1 = document.createElement("h1");
h1.innerText="Welcome";
let p = document.createElement("p");
p.innerText="Welcome To Elzero Web School";
let btn = document.createElement("button");
btn.style.cssText=`
position:absolute;
top:-10px;
right:-10px;
color:white;
border-radius:50%;
border:2px solid white;
background-color : red;
padding:5px 10px;
cursor:pointer;`
btn.innerText="X";
div.append(h1);
div.append(p);
div.append(btn);

function app() { document.body.append(div);};

setTimeout(app,5000);

btn.onclick = function(){div.style.display="none"}