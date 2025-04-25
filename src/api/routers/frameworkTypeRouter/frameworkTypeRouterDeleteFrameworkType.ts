import { frameworkTypeController } from '@app-ae/api/controllers/frameworkTypeController';
import { frameworkTypeValidationSchemaDeleteFrameworkType } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const frameworkTypeRouterDeleteFrameworkType = Router(options).get(
  '/',
  checkSchema(<Schema>frameworkTypeValidationSchemaDeleteFrameworkType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { frameworkTypeId } = matchedData(req);
      const deleteResponse = await frameworkTypeController.deleteFrameworkType({
        frameworkTypeId,
      });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
