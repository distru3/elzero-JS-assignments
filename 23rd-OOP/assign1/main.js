
class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    running(){
        console.log("car is running now")
    }
    stopped(){
        console.log("car is stopped now")
    }
}
    let car1 = new Car("MG","2022","420000")
    let car2 = new Car("BMW","2022","420000")
    let car3 = new Car("Toyota","2022","420000")
    console.log(`car one's name is ${car1.n} and model is ${car1.m} and price is ${car1.p}`)
    console.log(car1.running())
  // Needed Output

//"Car One Name Is MG And Model Is 2022 And Price Is 420000"
//"Car Is Running Now"