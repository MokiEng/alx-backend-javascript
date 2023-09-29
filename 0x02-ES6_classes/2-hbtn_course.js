export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'Name');
    this._length = this.validateNumber(length, 'Length');
    this._students = this.validateStudents(students);
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    this._name = this.validateString(value, 'Name');
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(value) {
    this._length = this.validateNumber(value, 'Length');
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(value) {
    this._students = this.validateStudents(value);
  }

  // Helper method to validate a string attribute
  validateString(value, attributeName) {
    if (typeof this._value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Helper method to validate a number attribute
  validateNumber(value, attributeName) {
    if (typeof this._value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  // Helper method to validate the students attribute
  validateStudents(value) {
    if (!Array.isArray(this._value) || !this._value.every(item => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return value;
  }
}
