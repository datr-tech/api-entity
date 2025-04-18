import { endpointController } from '@app/api/controllers/endpointController';
import { endpointValidationSchemaDeleteEndpoint } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const endpointRouterDeleteEndpoint = Router(options).get(
  '/',
  checkSchema(<Schema>endpointValidationSchemaDeleteEndpoint),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { endpointId } = matchedData(req);
      const deleteResponse = await endpointController.deleteEndpoint({ endpointId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
