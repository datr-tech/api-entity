import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { frameworkValidationSchemaDeleteFramework } from '@freight/entity-router-validation-schemas';
import { frameworkController } from '@app/api/controllers/frameworkController';

export const frameworkRouterDeleteFramework = Router(options).get(
  '/',
  checkSchema(<Schema>frameworkValidationSchemaDeleteFramework),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { frameworkId } = matchedData(req);
      const deleteResponse = await frameworkController.deleteFramework({ frameworkId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
