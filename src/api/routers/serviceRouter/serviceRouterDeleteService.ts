import { serviceController } from '@app/api/controllers/serviceController';
import { serviceValidationSchemaDeleteService } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const serviceRouterDeleteService = Router(options).get(
  '/',
  checkSchema(<Schema>serviceValidationSchemaDeleteService),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { serviceId } = matchedData(req);
      const deleteResponse = await serviceController.deleteService({ serviceId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
