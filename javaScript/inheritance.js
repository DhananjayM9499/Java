class Car {
  constructor(Brand) {
    this.carName = Brand;
  }
  present() {
    return "I have a " + this.carName;
  }
}
class Model extends Car {
  constructor(Brand, mod) {
    super(Brand);
    this.model = mod;
  }
  show() {
    return this.present() + ",it is a " + this.model;
  }
}

let myCar = new Model("honda", "city");
let result = myCar.show();
console.log(result);
document.getElementById("demo").innerHTML = result;
