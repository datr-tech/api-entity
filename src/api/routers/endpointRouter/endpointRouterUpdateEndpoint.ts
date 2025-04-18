import { endpointController } from '@app/api/controllers/endpointController';
import { endpointValidationSchemaUpdateEndpoint } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const endpointRouterUpdateEndpoint = Router(options).patch(
  '/',
  checkSchema(<Schema>endpointValidationSchemaUpdateEndpoint),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { endpointId, ...payload } = matchedData(req);
      const updateStatus = await endpointController.updateEndpoint({
        endpointId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
