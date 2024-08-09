class Phone {
    constructor(name, serial, price) {
      this.name = name;
      this.serial = serial;
      this.price = price;
    }
  }
  
  // Write Tablet Class Here
  class Tablet extends Phone{
    constructor(name,serial,price,size="Unknown"){
        super(name,serial,price)
        this.size = size;
    }
    fullDetails(){
        console.log(`${this.name} Serial is ${this.serial} and size is ${this.size}`)
    }
  }
  
  let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
  let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
  let TabletThree = new Tablet("LG", 250450650, 650);
  
  console.log(`${TabletOne.fullDetails()}`);
  
  console.log(`${TabletTwo.fullDetails()}`);
  
  console.log(`${TabletThree.fullDetails()}`);
