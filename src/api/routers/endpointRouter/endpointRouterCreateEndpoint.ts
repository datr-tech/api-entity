import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { endpointValidationSchemaCreateEndpoint } from '@freight/entity-router-validation-schemas';
import { endpointController } from '@app/api/controllers/endpointController';
import { IEndpointModel } from '@app/interfaces/api/models/IEndpointModel';

export const endpointRouterCreateEndpoint = Router(options).post(
  '/',
  checkSchema(<Schema>endpointValidationSchemaCreateEndpoint),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IEndpointModel>(req);
      const endpointId = await endpointController.createEndpoint(validatedParams);

      res.status(201).send({ endpointId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
