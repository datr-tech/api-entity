import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { frameworkTypeValidationSchemaDeleteFrameworkType } from '@freight/entity-router-validation-schemas';
import { frameworkTypeController } from '@app/api/controllers/frameworkTypeController';

export const frameworkTypeRouterDeleteFrameworkType = Router(options).get(
  '/',
  checkSchema(<Schema>frameworkTypeValidationSchemaDeleteFrameworkType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { frameworkTypeId } = matchedData(req);
      const deleteResponse = await frameworkTypeController.deleteFrameworkType({ frameworkTypeId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
