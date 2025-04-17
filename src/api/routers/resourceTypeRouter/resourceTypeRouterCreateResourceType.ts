import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { resourceTypeValidationSchemaCreateResourceType } from '@freight/entity-router-validation-schemas';
import { resourceTypeController } from '@app/api/controllers/resourceTypeController';
import { IResourceTypeModel } from '@app/interfaces/api/models/IResourceTypeModel';

export const resourceTypeRouterCreateResourceType = Router(options).post(
  '/',
  checkSchema(<Schema>resourceTypeValidationSchemaCreateResourceType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IResourceTypeModel>(req);
      const resourceTypeId = await resourceTypeController.createResourceType(validatedParams);

      res.status(201).send({ resourceTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
