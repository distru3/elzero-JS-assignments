let imageArr = document.images;
for(let i = 0; i< imageArr.length; i++){
    if(imageArr[i].alt !== ""){
        imageArr[i].alt = "old"
    }else{
        imageArr[i].alt = "Elzero New"
    }
}