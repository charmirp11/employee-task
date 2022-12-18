import sinon from 'sinon';
import DBProvider from '../dbProvider/index';
import employeeService from '../services/employee.service';
import JsonResponse from '../models/json.response.model';
test('add employee', async () => {
  const result = await employeeService.addEmployees({
    employeeId: 1,
    employeeName: 'Charmi',
    employeeEmailAddress:'charmi@gmail.com'
  });
  sinon.assert.match(
    result.message,
    'Employee Details Inserted SuccessFully!!');
});
test('email address must be unique validation check', async () => {
    const result=await employeeService.addEmployees({ employeeId: 2, employeeName: 'Rishi',employeeEmailAddress:'charmi@gmail.com' });
    console.log('result::'+JSON.stringify(result))
    sinon.assert.match(result.message, 'Email Address must be unique.');
  });
test('get employee', async () => {
  await employeeService.addEmployees({ employeeId: 2, employeeName: 'Rishi',employeeEmailAddress:'rishi@gmail.com' });
  const result : JsonResponse= await employeeService.getEmployees();
  sinon.assert.match(result.employees.length, 2);
  DBProvider.destroy();
});


