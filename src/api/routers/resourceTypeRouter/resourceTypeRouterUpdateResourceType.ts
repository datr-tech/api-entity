import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { resourceTypeValidationSchemaUpdateResourceType } from '@freight/entity-router-validation-schemas';
import { resourceTypeController } from '@app/api/controllers/resourceTypeController';

export const resourceTypeRouterUpdateResourceType = Router(options).patch(
  '/',
  checkSchema(<Schema>resourceTypeValidationSchemaUpdateResourceType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { resourceTypeId, ...payload } = matchedData(req);
      const updateStatus = await resourceTypeController.updateResourceType({ resourceTypeId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
