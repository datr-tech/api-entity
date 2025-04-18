import { resourceController } from '@app/api/controllers/resourceController';
import { resourceValidationSchemaReadResource } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const resourceRouterReadResource = Router(options).get(
  '/',
  checkSchema(<Schema>resourceValidationSchemaReadResource),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { resourceId } = matchedData(req);
      const resource = await resourceController.readResource({ resourceId });

      res.status(200).send({ resource });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
