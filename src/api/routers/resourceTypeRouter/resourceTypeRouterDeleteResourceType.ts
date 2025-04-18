import { resourceTypeController } from '@app/api/controllers/resourceTypeController';
import { resourceTypeValidationSchemaDeleteResourceType } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const resourceTypeRouterDeleteResourceType = Router(options).get(
  '/',
  checkSchema(<Schema>resourceTypeValidationSchemaDeleteResourceType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { resourceTypeId } = matchedData(req);
      const deleteResponse = await resourceTypeController.deleteResourceType({
        resourceTypeId,
      });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
