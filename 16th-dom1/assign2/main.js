let images = document.images;

for(let i = 0; i < images.length; i++){
    document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
    document.images[i].alt = "Elzero logo"
}

console.log(document.body.children)

