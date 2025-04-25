import { resourceController } from '@app-ae/api/controllers/resourceController';
import { resourceValidationSchemaUpdateResource } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const resourceRouterUpdateResource = Router(options).patch(
  '/',
  checkSchema(<Schema>resourceValidationSchemaUpdateResource),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { resourceId, ...payload } = matchedData(req);
      const updateStatus = await resourceController.updateResource({
        resourceId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
