import { Router } from 'express';
import EmployeeController from '../controllers/employee.contoller';
import { authorize } from '../middlewares/auth.middleware';

const router = Router();

router
  .route('/employee')
  .get(authorize(['getEmployees']), EmployeeController.getEmployee);

router
  .route('/employee')
  .post(authorize(['addEmployees']), EmployeeController.addEmployees);

export default router;
