import { serviceController } from '@app/api/controllers/serviceController';
import { serviceValidationSchemaUpdateService } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const serviceRouterUpdateService = Router(options).patch(
  '/',
  checkSchema(<Schema>serviceValidationSchemaUpdateService),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { serviceId, ...payload } = matchedData(req);
      const updateStatus = await serviceController.updateService({ serviceId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
