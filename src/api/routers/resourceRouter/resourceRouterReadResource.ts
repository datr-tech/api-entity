import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { resourceValidationSchemaReadResource } from '@freight/entity-router-validation-schemas';
import { resourceController } from '@app/api/controllers/resourceController';

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
