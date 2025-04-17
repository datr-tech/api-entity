import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { serviceValidationSchemaCreateService } from '@freight/entity-router-validation-schemas';
import { serviceController } from '@app/api/controllers/serviceController';
import { IServiceModel } from '@app/interfaces/api/models/IServiceModel';

export const serviceRouterCreateService = Router(options).post(
  '/',
  checkSchema(<Schema>serviceValidationSchemaCreateService),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IServiceModel>(req);
      const serviceId = await serviceController.createService(validatedParams);

      res.status(201).send({ serviceId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
