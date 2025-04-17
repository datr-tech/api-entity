import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { endpointValidationSchemaUpdateEndpoint } from '@freight/entity-router-validation-schemas';
import { endpointController } from '@app/api/controllers/endpointController';

export const endpointRouterUpdateEndpoint = Router(options).patch(
  '/',
  checkSchema(<Schema>endpointValidationSchemaUpdateEndpoint),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { endpointId, ...payload } = matchedData(req);
      const updateStatus = await endpointController.updateEndpoint({ endpointId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
