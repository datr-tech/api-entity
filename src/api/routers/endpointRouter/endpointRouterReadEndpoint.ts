import { endpointController } from '@app-ae/api/controllers/endpointController';
import { endpointValidationSchemaReadEndpoint } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

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
