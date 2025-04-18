import { frameworkController } from '@app/api/controllers/frameworkController';
import { frameworkValidationSchemaDeleteFramework } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

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
