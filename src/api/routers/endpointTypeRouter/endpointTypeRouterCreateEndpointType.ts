import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { endpointTypeValidationSchemaCreateEndpointType } from '@freight/entity-router-validation-schemas';
import { endpointTypeController } from '@app/api/controllers/endpointTypeController';
import { IEndpointTypeModel } from '@app/interfaces/api/models/IEndpointTypeModel';

export const endpointTypeRouterCreateEndpointType = Router(options).post(
  '/',
  checkSchema(<Schema>endpointTypeValidationSchemaCreateEndpointType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IEndpointTypeModel>(req);
      const endpointTypeId = await endpointTypeController.createEndpointType(validatedParams);

      res.status(201).send({ endpointTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
