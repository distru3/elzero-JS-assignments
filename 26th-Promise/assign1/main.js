const getData = (apiLink) => {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        myRequest.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            resolve(JSON.parse(this.responseText));
        } else {
            reject(Error("No Data Found"));
        }
        };
        myRequest.open("GET", apiLink);
        myRequest.send();
    });
};

getData("./file.json")
  .then((result) => {
    result.length = 5;
    console.log(result)
    for(i = 0; i < result.length; i++){
        let title = document.createElement("h2");
        title.textContent = result[i].title;
        let desc = document.createElement("p");
        desc.textContent = result[i].description;
        let div = document.createElement('div')
        div.append(title);
        div.append(desc);
        document.body.append(div)
    }
    return result;
  })