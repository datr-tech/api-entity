import { frameworkTypeController } from '@app/api/controllers/frameworkTypeController';
import { frameworkTypeValidationSchemaReadFrameworkType } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const frameworkTypeRouterReadFrameworkType = Router(options).get(
  '/',
  checkSchema(<Schema>frameworkTypeValidationSchemaReadFrameworkType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { frameworkTypeId } = matchedData(req);
      const frameworkType = await frameworkTypeController.readFrameworkType({
        frameworkTypeId,
      });

      res.status(200).send({ frameworkType });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
