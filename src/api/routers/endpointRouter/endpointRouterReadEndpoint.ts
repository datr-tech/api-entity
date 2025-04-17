import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { endpointValidationSchemaReadEndpoint } from '@freight/entity-router-validation-schemas';
import { endpointController } from '@app/api/controllers/endpointController';

export const endpointRouterReadEndpoint = Router(options).get(
  '/',
  checkSchema(<Schema>endpointValidationSchemaReadEndpoint),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { endpointId } = matchedData(req);
      const endpoint = await endpointController.readEndpoint({ endpointId });

      res.status(200).send({ endpoint });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
