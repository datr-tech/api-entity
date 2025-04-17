import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { frameworkTypeValidationSchemaCreateFrameworkType } from '@freight/entity-router-validation-schemas';
import { frameworkTypeController } from '@app/api/controllers/frameworkTypeController';
import { IFrameworkTypeModel } from '@app/interfaces/api/models/IFrameworkTypeModel';

export const frameworkTypeRouterCreateFrameworkType = Router(options).post(
  '/',
  checkSchema(<Schema>frameworkTypeValidationSchemaCreateFrameworkType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IFrameworkTypeModel>(req);
      const frameworkTypeId = await frameworkTypeController.createFrameworkType(validatedParams);

      res.status(201).send({ frameworkTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
