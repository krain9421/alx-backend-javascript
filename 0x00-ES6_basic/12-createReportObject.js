export default function createReportObject(employeesList) {
  const reportObject = {
      'allEmployees': ...employeesList,
      getNumberOfDepartments(employeesList) {
          let count = 0;
          for (value of Object.keys(employeesList)) {
              count += 1;
          };
          return count;
      },
      
  };
  
  return reportObject;
}
