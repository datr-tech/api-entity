import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { endpointTypeValidationSchemaReadEndpointType } from '@freight/entity-router-validation-schemas';
import { endpointTypeController } from '@app/api/controllers/endpointTypeController';

export const endpointTypeRouterReadEndpointType = Router(options).get(
  '/',
  checkSchema(<Schema>endpointTypeValidationSchemaReadEndpointType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { endpointTypeId } = matchedData(req);
      const endpointType = await endpointTypeController.readEndpointType({ endpointTypeId });

      res.status(200).send({ endpointType });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
