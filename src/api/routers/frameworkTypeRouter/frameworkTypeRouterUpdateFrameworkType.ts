import { frameworkTypeController } from '@app-ae/api/controllers/frameworkTypeController';
import { frameworkTypeValidationSchemaUpdateFrameworkType } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const frameworkTypeRouterUpdateFrameworkType = Router(options).patch(
  '/',
  checkSchema(<Schema>frameworkTypeValidationSchemaUpdateFrameworkType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { frameworkTypeId, ...payload } = matchedData(req);
      const updateStatus = await frameworkTypeController.updateFrameworkType({
        frameworkTypeId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
