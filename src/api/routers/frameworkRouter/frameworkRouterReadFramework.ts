import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { frameworkValidationSchemaReadFramework } from '@freight/entity-router-validation-schemas';
import { frameworkController } from '@app/api/controllers/frameworkController';

export const frameworkRouterReadFramework = Router(options).get(
  '/',
  checkSchema(<Schema>frameworkValidationSchemaReadFramework),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { frameworkId } = matchedData(req);
      const framework = await frameworkController.readFramework({ frameworkId });

      res.status(200).send({ framework });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
