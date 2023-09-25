export default function createEmployeesObject(departmentName, employees) {
  // Create an object with the specified departmentName and employees array
  const departmentObject = {
    [departmentName]: employees,
  };

  return departmentObject;
}
