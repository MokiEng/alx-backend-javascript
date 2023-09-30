import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    // Use 'this' to create a new instance of Car with the same attributes
    return new Car(this._brand, this._motor, this._color);
  }
}
