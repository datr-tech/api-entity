import { resourceTypeController } from '@app/api/controllers/resourceTypeController';
import { resourceTypeValidationSchemaReadResourceType } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const resourceTypeRouterReadResourceType = Router(options).get(
  '/',
  checkSchema(<Schema>resourceTypeValidationSchemaReadResourceType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { resourceTypeId } = matchedData(req);
      const resourceType = await resourceTypeController.readResourceType({
        resourceTypeId,
      });

      res.status(200).send({ resourceType });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
