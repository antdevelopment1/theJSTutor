class Car {
    constructor(brand, color, year) {
      this.carname = brand;
      this.color = color;
      this.year = year;
    }
    present() {
      return 'I have a ' + this.carname + this.color + this.year;
    }
  }
  
  class Model extends Car {
    constructor(brand, color, year, mod) {
      super(brand, color, year);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }

let  mycar = new Model("Ford", 'red', '1999', "Mustang");
console.log(mycar);
  