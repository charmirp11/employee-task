import { Request, Response, NextFunction } from 'express';
import ErrorResponseModel from '../models/error.response.model';

function handleError(
  err: ErrorResponseModel | TypeError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let customError = err;
  if (!(err instanceof ErrorResponseModel)) {
    customError = new ErrorResponseModel(
      500,'Error Occured!!!'
    );
  }

  res.status((customError as ErrorResponseModel).code).send(customError);
};

export default handleError;