import { frameworkTypeController } from '@app-ae/api/controllers/frameworkTypeController';
import { IFrameworkTypeModel } from '@app-ae/interfaces/api/models/IFrameworkTypeModel';
import { frameworkTypeValidationSchemaCreateFrameworkType } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const frameworkTypeRouterCreateFrameworkType = Router(options).post(
  '/',
  checkSchema(<Schema>frameworkTypeValidationSchemaCreateFrameworkType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IFrameworkTypeModel>(req);
      const frameworkTypeId =
        await frameworkTypeController.createFrameworkType(validatedParams);

      res.status(201).send({ frameworkTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
