import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../errors/bad-request-error';
import { CustomError } from '../errors/custom-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { NotAuthorizedError } from '../errors/not-authorized';
import { NotFoundError } from '../errors/not-found-error';
import { RequestValidationError } from '../errors/request-validation-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.log(err);

  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
