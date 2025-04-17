import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { frameworkValidationSchemaUpdateFramework } from '@freight/entity-router-validation-schemas';
import { frameworkController } from '@app/api/controllers/frameworkController';

export const frameworkRouterUpdateFramework = Router(options).patch(
  '/',
  checkSchema(<Schema>frameworkValidationSchemaUpdateFramework),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { frameworkId, ...payload } = matchedData(req);
      const updateStatus = await frameworkController.updateFramework({ frameworkId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
