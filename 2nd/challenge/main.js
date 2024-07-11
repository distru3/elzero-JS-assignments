let theTitle="Elzero",theDiscription="Elzero Web School",theDate="25/10";

let markUp = `
<div>
    <h3>hello ${theTitle}</h3>
    <p>${theDiscription}</p>
    <span>${theDate}</span></br>
</div>`;

let result = markUp.repeat(4);

document.write(result);