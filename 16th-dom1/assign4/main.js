let text = document.body.getElementsByTagName("div");
let title1 = text[0].title;
let text1 = text[0].innerText;
text[0].title = text[1].title;
text[1].title = title1;
text[0].innerText = text[1].innerText;
text[1].innerText = `${text1} 2`;