export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Get the current class constructor and create a new instance of it
    const Constructor = this.constructor;
    return new Constructor();
  }
}
