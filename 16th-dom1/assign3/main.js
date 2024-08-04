let myValue = document.getElementsByName("dollar")[0];
let result = document.getElementsByClassName("result")[0];

console.log(myValue.value)

myValue.oninput = function(e){
    document.getElementsByClassName("result")[0].textContent = `{${myValue.value}} USD Dollar = {${(myValue.value * 15.6).toFixed(2)} Egyptian Pounds`
    
}