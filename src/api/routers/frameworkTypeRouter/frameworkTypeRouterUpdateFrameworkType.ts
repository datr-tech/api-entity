import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { frameworkTypeValidationSchemaUpdateFrameworkType } from '@freight/entity-router-validation-schemas';
import { frameworkTypeController } from '@app/api/controllers/frameworkTypeController';

export const frameworkTypeRouterUpdateFrameworkType = Router(options).patch(
  '/',
  checkSchema(<Schema>frameworkTypeValidationSchemaUpdateFrameworkType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { frameworkTypeId, ...payload } = matchedData(req);
      const updateStatus = await frameworkTypeController.updateFrameworkType({ frameworkTypeId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
