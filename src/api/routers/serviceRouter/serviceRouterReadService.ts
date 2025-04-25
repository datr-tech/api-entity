import { serviceController } from '@app-ae/api/controllers/serviceController';
import { serviceValidationSchemaReadService } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const serviceRouterReadService = Router(options).get(
  '/',
  checkSchema(<Schema>serviceValidationSchemaReadService),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { serviceId } = matchedData(req);
      const service = await serviceController.readService({ serviceId });

      res.status(200).send({ service });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
