import { frameworkController } from '@app-ae/api/controllers/frameworkController';
import { frameworkValidationSchemaReadFramework } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

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
