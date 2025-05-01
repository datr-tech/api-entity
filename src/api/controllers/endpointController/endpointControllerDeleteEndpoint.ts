import { EndpointModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IEndpointControllerDeleteEndpoint,
  IEndpointControllerDeleteEndpointOutputError,
  IEndpointControllerDeleteEndpointOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * endpointControllerDeleteEndpoint
 *
 * The entity API delete endpoint controller.
 *
 * @param { IEndpointControllerDeleteEndpointInput } params
 * @param { Types.ObjectId } params.endpointId
 *
 * @returns { Promise<IEndpointControllerDeleteEndpointOutput> }
 * @returns { Promise<IEndpointControllerDeleteEndpointOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IEndpointControllerDeleteEndpointOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { endpointModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const endpointControllerDeleteEndpoint: IEndpointControllerDeleteEndpoint =
  async ({ endpointId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'EndpointModel'
       * using the received 'endpointId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      await EndpointModel.findOneAndUpdate(
        {
          _id: endpointId,
        },
        {
          adminStatusId: new Types.ObjectId(),
        },
        {
          includeResultMetadata: true,
        },
      );

      /*
       * Use the standard controller response object,
       * 'stat', to return the primary key of the
       * "soft deleted" model.
       */
      stat.error = false;
      stat.payload = { endpointId };

      /*
       * Cast the response object to
       * 'IEndpointControllerDeleteEndpointOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IEndpointControllerDeleteEndpointOutput'.
       */
      return stat as IEndpointControllerDeleteEndpointOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IEndpointControllerDeleteEndpointOutputError',
       */
      return stat as IEndpointControllerDeleteEndpointOutputError;
    }
  };
