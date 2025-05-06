import { endpointController } from '@app-ae/api/controllers/endpointController';
import {
  IEndpointControllerReadEndpointOutputError as IControllerError,
  IEndpointControllerReadEndpointOutputSuccess as IControllerSuccess,
} from '@app-ae/interfaces/api/controllers';
import { IEndpointModel } from '@app-ae/interfaces/api/models/IEndpointModel';
import { endpointValidationSchemaReadEndpoint } from '@datr.tech/cargo-router-validation-schemas-entity';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

/**
 * @name					endpointRouterReadEndpoint
 *
 * @description		The 'readEndpoint' router for 'endpoint', whose expected
 *                inputs have been defined within the following schema:
 *                'endpointValidationSchemaReadEndpoint'.
 *
 *                The schema will be used by 'express-validator' to perform input validation.
 *                When the validation process succeeds, control will pass to the associated
 *                controller, 'endpointController', which, when successful, will return
 *                a common status (or 'stat') object, whose 'payload' will contain
 *                'endpointModel'.
 *
 * @param					{Request}		req		The Express request.
 * @param         {Response}	res		The Express response.
 * @return				{undefined}
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 *
 * @see		        | Outcomes                    | HTTP status codes |
 *                | --------------------------- | ----------------- |
 *                | On success                  | 200               |
 *                | Router validation error     | 422               |
 *                | Controller validation error | 404               |
 *                | Server error                | 500               |
 */
export const endpointRouterReadEndpoint = Router(options).get(
  '/',
  checkSchema(<Schema>endpointValidationSchemaReadEndpoint),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    try {
      /*
       * Handle validation errors
       * ------------------------
       *
       * Handle validation errors in relation to the fields
       * defined within 'endpointValidationSchemaReadEndpoint'.
       * Additionally, and because of the inclusion of 'checkExact()'
       * above, ONLY fields defined within the schema will be accepted.
       */
      if (!errors.isEmpty()) {
        res.status(422).send({ error: errors.array() });
      }

      /*
       * Pass the validated params to the controller
       * -------------------------------------------
       *
       * On validation success, retrieve the 'validatedParams' object
       * from the received 'req' (using 'matchedData') and pass them
       * to 'endpointController'.
       */

      const validatedParams = matchedData<IEndpointModel>(req);
      const stat = await endpointController.readEndpoint(validatedParams);

      /*
       * Handle controller errors
       * ------------------------
       *
       * If the common controller response object, 'stat', is not truthy, or if
       * 'stat.error' equals true, then handle the error returned by the controller.
       */
      if (!stat || stat.error) {
        const { message, responseStatusCode } = (stat as IControllerError).payload;
        res.status(responseStatusCode).send({ error: message });
      }

      /*
       * Handle successful controller responses
       * --------------------------------------
       *
       * If the controller call proved to be successful, extract
       * 'endpointModel' from 'stat.payload' and return
       * it with an appropriate status code.
       */

      const { endpointModel, responseStatusCode } = (stat as IControllerSuccess).payload;
      res.status(responseStatusCode).send({ endpointModel });
    } catch (error) {
      /*
       * Handle any errors not caught above.
       */
      const { message } = error;
      res.status(500).send({ error: message });
    }
  },
);
