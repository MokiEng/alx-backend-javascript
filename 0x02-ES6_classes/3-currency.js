export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and setter methods for 'code' and 'name' attributes

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // Method to display the full currency format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Static method to create a Currency instance from a formatted string
  static fromString(currencyString) {
    const [name, code] = currencyString.split(' (');
    return new Currency(code.slice(0, -1), name);
  }
}
