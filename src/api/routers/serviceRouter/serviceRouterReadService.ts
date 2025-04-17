import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { serviceValidationSchemaReadService } from '@freight/entity-router-validation-schemas';
import { serviceController } from '@app/api/controllers/serviceController';

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
