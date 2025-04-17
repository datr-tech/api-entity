import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { serviceValidationSchemaUpdateService } from '@freight/entity-router-validation-schemas';
import { serviceController } from '@app/api/controllers/serviceController';

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
