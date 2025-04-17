import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { resourceValidationSchemaCreateResource } from '@freight/entity-router-validation-schemas';
import { resourceController } from '@app/api/controllers/resourceController';
import { IResourceModel } from '@app/interfaces/api/models/IResourceModel';

export const resourceRouterCreateResource = Router(options).post(
  '/',
  checkSchema(<Schema>resourceValidationSchemaCreateResource),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IResourceModel>(req);
      const resourceId = await resourceController.createResource(validatedParams);

      res.status(201).send({ resourceId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
