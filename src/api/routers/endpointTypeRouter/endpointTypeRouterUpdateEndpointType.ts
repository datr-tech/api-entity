import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { endpointTypeValidationSchemaUpdateEndpointType } from '@freight/entity-router-validation-schemas';
import { endpointTypeController } from '@app/api/controllers/endpointTypeController';

export const endpointTypeRouterUpdateEndpointType = Router(options).patch(
  '/',
  checkSchema(<Schema>endpointTypeValidationSchemaUpdateEndpointType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { endpointTypeId, ...payload } = matchedData(req);
      const updateStatus = await endpointTypeController.updateEndpointType({ endpointTypeId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
