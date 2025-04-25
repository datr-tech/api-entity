import { serviceController } from '@app-ae/api/controllers/serviceController';
import { IServiceModel } from '@app-ae/interfaces/api/models/IServiceModel';
import { serviceValidationSchemaCreateService } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

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
