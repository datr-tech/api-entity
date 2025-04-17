import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { endpointTypeValidationSchemaDeleteEndpointType } from '@freight/entity-router-validation-schemas';
import { endpointTypeController } from '@app/api/controllers/endpointTypeController';

export const endpointTypeRouterDeleteEndpointType = Router(options).get(
  '/',
  checkSchema(<Schema>endpointTypeValidationSchemaDeleteEndpointType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { endpointTypeId } = matchedData(req);
      const deleteResponse = await endpointTypeController.deleteEndpointType({ endpointTypeId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
