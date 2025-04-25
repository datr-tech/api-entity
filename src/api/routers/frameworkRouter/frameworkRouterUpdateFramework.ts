import { frameworkController } from '@app-ae/api/controllers/frameworkController';
import { frameworkValidationSchemaUpdateFramework } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const frameworkRouterUpdateFramework = Router(options).patch(
  '/',
  checkSchema(<Schema>frameworkValidationSchemaUpdateFramework),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { frameworkId, ...payload } = matchedData(req);
      const updateStatus = await frameworkController.updateFramework({
        frameworkId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
