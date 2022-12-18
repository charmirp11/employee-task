import employeeDBOperations from '../dbProvider/EmployeeDBOperations';
import ErrorResponseModel from '../models/error.response.model';
import JsonResponse from '../models/json.response.model';

export class EmployeeService {
  public async addEmployees(data: any): Promise<any> {
    const dataMap = await this.checkIfAlreadyExist(data);
    const result = await employeeDBOperations.insert(dataMap);
    return result;
  }

  public async getEmployees(): Promise<JsonResponse> {
    const result = await employeeDBOperations.fetchAllEmployees();
    return new JsonResponse(200, null, result);
  }

  public async checkIfAlreadyExist(data: any) {
    const result = await employeeDBOperations.fetchAllEmployees();
    for (const res of result) {
      if (data.employeeEmailAddress === res.employeeEmailAddress) {
        throw new ErrorResponseModel(400, 'Email Address must be unique.');
      }
    }
    return data;
  }
}

const employeeService = new EmployeeService();
export default employeeService;
