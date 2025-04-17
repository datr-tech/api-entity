import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { resourceValidationSchemaUpdateResource } from '@freight/entity-router-validation-schemas';
import { resourceController } from '@app/api/controllers/resourceController';

export const resourceRouterUpdateResource = Router(options).patch(
  '/',
  checkSchema(<Schema>resourceValidationSchemaUpdateResource),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { resourceId, ...payload } = matchedData(req);
      const updateStatus = await resourceController.updateResource({ resourceId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
