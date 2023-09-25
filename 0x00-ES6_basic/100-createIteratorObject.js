export default function createIteratorObject(report) {
  // Initialize department and employee index variables
  let departmentIndex = 0;
  let employeeIndex = 0;

  // Get an array of department names
  const departments = Object.keys(report.allEmployees);

  // Define the next() function for the iterator
  const next = () => {
    // Check if we have more departments to iterate through
    if (departmentIndex < departments.length) {
      const department = departments[departmentIndex];
      const employeesInDepartment = report.allEmployees[department];

      // Check if we have more employees in the current department
      if (employeeIndex < employeesInDepartment.length) {
        // Get the next employee in the current department
        const employee = employeesInDepartment[employeeIndex];
        employeeIndex++;

        // Return the employee
        return { value: employee, done: false };
      } else {
        // Move to the next department and reset the employee index
        departmentIndex++;
        employeeIndex = 0;

        // Recursively call next() to get the next employee
        return next();
      }
    }

    // If there are no more departments, mark as done
    return { done: true };
  };

  // Return an iterable object with a next() method
  return {
    [Symbol.iterator]: function () {
      return { next };
    },
  };
}
