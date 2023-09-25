export default function createReportObject(employeesList) {
  // Create an object with allEmployees key containing department names and employees
  const allEmployees = employeesList;

  // Create a method property getNumberOfDepartments to count the number of departments
  const getNumberOfDepartments = () => Object.keys(allEmployees).length;

  // Return an object with allEmployees and getNumberOfDepartments
  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
