import { endpointTypeController } from '@app-ae/api/controllers/endpointTypeController';
import { endpointTypeValidationSchemaUpdateEndpointType } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const endpointTypeRouterUpdateEndpointType = Router(options).patch(
  '/',
  checkSchema(<Schema>endpointTypeValidationSchemaUpdateEndpointType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { endpointTypeId, ...payload } = matchedData(req);
      const updateStatus = await endpointTypeController.updateEndpointType({
        endpointTypeId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
