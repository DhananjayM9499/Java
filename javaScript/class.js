class Car {
  constructor(name, year) {
    this.carName = name;
    this.carYear = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.carYear;
  }
}
let myCar1 = new Car("Ford", 2014);
console.log("my car1.age() : " + myCar1.age());

let myCar2 = new Car("Ford", 2002);
console.log("my car2.age() : " + myCar2.age());
