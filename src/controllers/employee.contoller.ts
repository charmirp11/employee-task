import { NextFunction, Request, Response } from 'express';
import JsonResponse from '../models/json.response.model';
import employeeService from '../services/employee.service';
class EmployeeContoller {
  public async addEmployees(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await employeeService.addEmployees(req.body);
      return res.send(result);
    } catch (err) {
      return next(err);
    }
  }
  public async getEmployee(req: Request, res: Response, next: NextFunction) {
    try {
      const result: JsonResponse = await employeeService.getEmployees();
      return res.status(result.statusCode).json(result.employees);
    } catch (err) {
      return next(err);
    }
  }
}

export default new EmployeeContoller();
