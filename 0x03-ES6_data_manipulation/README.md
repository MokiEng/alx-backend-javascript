**ES6 Data Manipulation**

ES6 (ECMAScript 2015) introduced several new features and improvements to JavaScript for data manipulation. These features have made working with data in JavaScript more concise and expressive. Here's a brief overview of some key data manipulation techniques in ES6:

1. **Arrow Functions:**

   Arrow functions (`=>`) provide a more concise way to define functions. They are commonly used in array methods like `map`, `filter`, and `reduce`. Arrow functions also have lexical scoping, meaning they inherit the `this` value from the surrounding code.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];

   // Using arrow functions
   const squared = numbers.map(num => num * num);
   ```

2. **Array Methods:**

   ES6 introduced several powerful array methods for manipulating data in arrays. Some commonly used methods include:

   - `map()`: Creates a new array by applying a function to each element of the original array.
   - `filter()`: Creates a new array with all elements that pass a test implemented by a provided function.
   - `reduce()`: Applies a function to accumulate a single value from left to right.
   - `find()`: Returns the first element in an array that satisfies a provided testing function.
   - `forEach()`: Iterates over an array and executes a provided function for each element.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];

   const doubled = numbers.map(num => num * 2);
   const even = numbers.filter(num => num % 2 === 0);
   const sum = numbers.reduce((acc, num) => acc + num, 0);
   ```

3. **Spread and Rest Operators:**

   The spread (`...`) and rest (`...`) operators allow for more flexible array and object manipulation. The spread operator can be used to merge arrays or objects, while the rest operator allows for handling variable numbers of function arguments.

   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = [4, 5, 6];
   const mergedArray = [...arr1, ...arr2];

   function sum(...args) {
     return args.reduce((total, num) => total + num, 0);
   }
   ```

4. **Destructuring:**

   Destructuring allows you to extract values from arrays and objects into variables. This simplifies working with complex data structures.

   ```javascript
   const person = { name: 'Alice', age: 30 };
   const { name, age } = person;

   const [first, second] = [1, 2];
   ```

5. **Template Literals:**

   Template literals (enclosed in backticks) provide a more readable way to concatenate strings and embed expressions within them.

   ```javascript
   const name = 'Alice';
   const greeting = `Hello, ${name}!`;
   ```

6. **Set and Map:**

   ES6 introduced `Set` and `Map` data structures for managing collections of values. Sets store unique values, and Maps store key-value pairs.

   ```javascript
   const uniqueNumbers = new Set([1, 2, 2, 3, 3]);
   const userRoles = new Map();

   userRoles.set('Alice', 'Admin');
   userRoles.set('Bob', 'User');
   ```

ES6 has significantly enhanced JavaScript's capabilities for data manipulation, making code cleaner and more expressive. These features, combined with the existing array methods, provide a powerful toolkit for handling data in JavaScript applications.
