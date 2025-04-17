import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { frameworkValidationSchemaCreateFramework } from '@freight/entity-router-validation-schemas';
import { frameworkController } from '@app/api/controllers/frameworkController';
import { IFrameworkModel } from '@app/interfaces/api/models/IFrameworkModel';

export const frameworkRouterCreateFramework = Router(options).post(
  '/',
  checkSchema(<Schema>frameworkValidationSchemaCreateFramework),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IFrameworkModel>(req);
      const frameworkId = await frameworkController.createFramework(validatedParams);

      res.status(201).send({ frameworkId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
