import sinon from 'sinon';
import DBProvider from '../dbProvider/index';
import JsonResponse from '../models/json.response.model';
import employeeService from '../services/employee.service';
test('add employee', async () => {
  const employeeDetails = {
    employeeId: 1,
    employeeName: 'Charmi',
    employeeEmailAddress: 'charmi@gmail.com',
  };
  const result = await employeeService.addEmployees(employeeDetails);
  sinon.assert.match(
    result.message,
    'Employee Details Inserted SuccessFully!!',
  );
});

test('get employee', async () => {
  const employeeDetails = {
    employeeId: 2,
    employeeName: 'Rishi',
    employeeEmailAddress: 'rishi@gmail.com',
  };
  await employeeService.addEmployees(employeeDetails);
  const result: JsonResponse = await employeeService.getEmployees();
  sinon.assert.match(result.employees.length, 2);
  DBProvider.destroy();
});
