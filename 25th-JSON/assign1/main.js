let data = document.createElement("div");
data.className = "data";
document.body.append(data);
let myAjax = new XMLHttpRequest();
myAjax.open("GET","./articles.json");
myAjax.send();
myAjax.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
        setTimeout(()=> console.log("data loaded"),0);
        let mainData = JSON.parse(this.responseText);
        for(i=0;i<mainData.length;i++){
            mainData[i].category = "all";
            let title = document.createElement("h2");
            let titleText = mainData[i].title;
            title.append(titleText);
            let body = document.createElement("p");
            let bodyText = mainData[i].body;
            body.append(bodyText);
            let author = document.createElement("p");
            let authorText = mainData[i].author;
            author.append(authorText);
            let cat = document.createElement("p");
            let catText = mainData[i].category;
            cat.append(catText);
            let div = document.createElement("div");
            div.append(title);
            div.append(body);
            div.append(author);
            div.append(cat);
            data.append(div)
        }
        console.log(mainData);
    }
}
