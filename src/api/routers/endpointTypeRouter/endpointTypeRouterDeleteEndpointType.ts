import { endpointTypeController } from '@app/api/controllers/endpointTypeController';
import { endpointTypeValidationSchemaDeleteEndpointType } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const endpointTypeRouterDeleteEndpointType = Router(options).get(
  '/',
  checkSchema(<Schema>endpointTypeValidationSchemaDeleteEndpointType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { endpointTypeId } = matchedData(req);
      const deleteResponse = await endpointTypeController.deleteEndpointType({
        endpointTypeId,
      });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
