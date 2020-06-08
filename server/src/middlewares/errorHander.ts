import { isCelebrate } from 'celebrate';
import { Request, Response, NextFunction } from 'express';
import { ErrorReport, ValidationErrorItem } from '@hapi/joi';

interface Details {
  message: string;
  fieldname: string | number;
  errorType: string;
}

interface Error {
  statusCode: number;
  error: string;
  details?: Details[];
  message?: string;
}

export default function (
  error: ErrorReport | any,
  request: Request,
  response: Response,
  next: NextFunction
): Response<Error> {
  if (isCelebrate(error)) {
    const err: Error = {
      statusCode: 400,
      error: 'Bad Request',
      details: [],
    };

    const details: ValidationErrorItem[] = error.joi.details;

    if (details) {
      details.forEach(d => {
        const context = d.context ? d.context : {};

        const detail: Details = {
          fieldname: context.label ? context.label : d.path[0],
          message: d.message,
          errorType: d.type,
        };

        if (err.details) {
          err.details.push(detail);
        }
      });
    }
    return response.status(400).json({ error: err });
  }

  return response.status(400).json({
    statusCode: 400,
    error: 'Bad Request',
    message: error.message,
  });
}
