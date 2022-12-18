import ErrorResponse from './error.response.model';
export default class JsonResponse {
  public statusCode: number;
  public error?: ErrorResponse | null;
  public employees: [];

  constructor(
    statusCode: number,
    error: ErrorResponse|null,
    employees: [],
  ) {
    this.statusCode = statusCode;
    this.error = error;
    this.employees = employees;
    Object.freeze(this);
  }
}
