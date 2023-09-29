ES6 (ECMAScript 2015) introduced a more structured way of creating constructor functions and prototypes using the `class` syntax. This new syntax makes it easier to work with object-oriented programming in JavaScript. Here are some basics of working with ES6 classes:

**1. Class Declaration:**

In ES6, you can declare a class using the `class` keyword. For example:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}
```

In this example, we've defined a `Person` class with a constructor to set the `name` and `age` properties and a `sayHello` method.

**2. Constructor:**

The `constructor` method is a special method used for initializing instances of the class. It is called automatically when a new object is created from the class.

**3. Class Methods:**

You can define methods inside the class, just like the `sayHello` method in the example above. These methods can be called on instances of the class.

**4. Creating Instances:**

To create an instance (object) of a class, you use the `new` keyword followed by the class name:

```javascript
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);
```

**5. Class Inheritance:**

ES6 classes also support inheritance. You can create a subclass that inherits properties and methods from a parent class:

```javascript
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Call the constructor of the parent class
    this.studentId = studentId;
  }
  
  study() {
    console.log(`${this.name} is studying.`);
  }
}
```

In this example, `Student` is a subclass of `Person`. It inherits the `name`, `age`, and `sayHello` method from the parent class `Person` and adds a new method `study`.

**6. `super` Keyword:**

The `super` keyword is used in the constructor of a subclass to call the constructor of the parent class. It's also used to call parent class methods from within the subclass.

**7. Class Properties:**

Starting with ES6, class properties can be defined directly within the class body without the need for a constructor:

```javascript
class Circle {
  radius = 0; // Class property
  
  constructor(radius) {
    this.radius = radius;
  }
  
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}
```

In this example, `radius` is a class property with an initial value of 0.

These are some of the basics of working with ES6 classes in JavaScript. They provide a more structured and readable way to create and work with objects and their behavior, making it easier to follow object-oriented principles in your JavaScript code.
