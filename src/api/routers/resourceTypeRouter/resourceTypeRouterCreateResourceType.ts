import { resourceTypeController } from '@app-ae/api/controllers/resourceTypeController';
import { IResourceTypeModel } from '@app-ae/interfaces/api/models/IResourceTypeModel';
import { resourceTypeValidationSchemaCreateResourceType } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const resourceTypeRouterCreateResourceType = Router(options).post(
  '/',
  checkSchema(<Schema>resourceTypeValidationSchemaCreateResourceType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IResourceTypeModel>(req);
      const resourceTypeId =
        await resourceTypeController.createResourceType(validatedParams);

      res.status(201).send({ resourceTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
