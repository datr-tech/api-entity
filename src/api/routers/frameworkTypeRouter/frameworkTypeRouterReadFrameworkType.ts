import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { frameworkTypeValidationSchemaReadFrameworkType } from '@freight/entity-router-validation-schemas';
import { frameworkTypeController } from '@app/api/controllers/frameworkTypeController';

export const frameworkTypeRouterReadFrameworkType = Router(options).get(
  '/',
  checkSchema(<Schema>frameworkTypeValidationSchemaReadFrameworkType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { frameworkTypeId } = matchedData(req);
      const frameworkType = await frameworkTypeController.readFrameworkType({ frameworkTypeId });

      res.status(200).send({ frameworkType });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
