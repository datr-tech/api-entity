import { EndpointTypeModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IEndpointTypeControllerUpdateEndpointType,
  IEndpointTypeControllerUpdateEndpointTypeOutputError,
  IEndpointTypeControllerUpdateEndpointTypeOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * endpointTypeControllerUpdateEndpointType
 *
 * The entity API update endpointType controller.
 *
 * @param { IEndpointTypeControllerUpdateEndpointTypeInput } params
 * @param { Types.ObjectId } params.endpointTypeId
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IEndpointTypeControllerUpdateEndpointTypeOutput> }
 * @returns { Promise<IEndpointTypeControllerUpdateEndpointTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IEndpointTypeControllerUpdateEndpointTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { endpointTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const endpointTypeControllerUpdateEndpointType: IEndpointTypeControllerUpdateEndpointType =
  async ({ endpointTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'EndpointTypeModel'
       * using the received 'endpointTypeId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await EndpointTypeModel.findOneAndUpdate(
        {
          _id: endpointTypeId,
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
        endpointTypeId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'IEndpointTypeControllerUpdateEndpointTypeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IEndpointTypeControllerUpdateEndpointTypeOutput'.
       */
      return stat as IEndpointTypeControllerUpdateEndpointTypeOutputSuccess;
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
       * Cast the response object to 'IEndpointTypeControllerUpdateEndpointTypeOutputError',
       */
      return stat as IEndpointTypeControllerUpdateEndpointTypeOutputError;
    }
  };
