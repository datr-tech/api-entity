import { EndpointModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IEndpointControllerUpdateEndpoint,
  IEndpointControllerUpdateEndpointOutputError,
  IEndpointControllerUpdateEndpointOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * endpointControllerUpdateEndpoint
 *
 * The entity API update endpoint controller.
 *
 * @param { IEndpointControllerUpdateEndpointInput } params
 * @param { Types.ObjectId } params.endpointId
 * @param { Types.ObjectId } params.payload.endpointTypeId  (Optional)
 * @param { string } params.payload.url  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IEndpointControllerUpdateEndpointOutput> }
 * @returns { Promise<IEndpointControllerUpdateEndpointOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IEndpointControllerUpdateEndpointOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { endpointModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const endpointControllerUpdateEndpoint: IEndpointControllerUpdateEndpoint =
  async ({ endpointId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'EndpointModel'
       * using the received 'endpointId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await EndpointModel.findOneAndUpdate(
        {
          _id: endpointId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      /*
       * Use the standard controller response object,
       * 'stat', to return the updated model's primary key.
       */
      stat.error = false;
      stat.payload = {
        endpointId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'IEndpointControllerUpdateEndpointOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IEndpointControllerUpdateEndpointOutput'.
       */
      return stat as IEndpointControllerUpdateEndpointOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = {
        message,
        responseStatusCode: 404,
      };

      /*
       * Cast the response object to 'IEndpointControllerUpdateEndpointOutputError',
       */
      return stat as IEndpointControllerUpdateEndpointOutputError;
    }
  };
