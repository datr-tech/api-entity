import { resourceTypeController } from '@app/api/controllers/resourceTypeController';
import { resourceTypeValidationSchemaUpdateResourceType } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const resourceTypeRouterUpdateResourceType = Router(options).patch(
  '/',
  checkSchema(<Schema>resourceTypeValidationSchemaUpdateResourceType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { resourceTypeId, ...payload } = matchedData(req);
      const updateStatus = await resourceTypeController.updateResourceType({
        resourceTypeId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
