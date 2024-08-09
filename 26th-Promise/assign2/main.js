fetch("./file.json")  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
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
  });