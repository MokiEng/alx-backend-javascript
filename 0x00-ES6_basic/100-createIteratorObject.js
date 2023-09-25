export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const employees = [].concat(...departments);
  let index = 0;

  return {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          if (index < employees.length) {
            return { value: employees[index++], done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
}
