export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Define a custom method for casting to a Number
  valueOf() {
    return this._size;
  }

  // Define a custom method for casting to a String
  toString() {
    return this._location;
  }
}
