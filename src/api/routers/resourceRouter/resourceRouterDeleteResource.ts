import { resourceController } from '@app/api/controllers/resourceController';
import { resourceValidationSchemaDeleteResource } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const resourceRouterDeleteResource = Router(options).get(
  '/',
  checkSchema(<Schema>resourceValidationSchemaDeleteResource),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { resourceId } = matchedData(req);
      const deleteResponse = await resourceController.deleteResource({ resourceId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
