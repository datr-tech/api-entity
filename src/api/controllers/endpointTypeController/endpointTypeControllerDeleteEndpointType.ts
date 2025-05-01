import { EndpointTypeModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IEndpointTypeControllerDeleteEndpointType,
  IEndpointTypeControllerDeleteEndpointTypeOutputError,
  IEndpointTypeControllerDeleteEndpointTypeOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * endpointTypeControllerDeleteEndpointType
 *
 * The entity API delete endpointType controller.
 *
 * @param { IEndpointTypeControllerDeleteEndpointTypeInput } params
 * @param { Types.ObjectId } params.endpointTypeId
 *
 * @returns { Promise<IEndpointTypeControllerDeleteEndpointTypeOutput> }
 * @returns { Promise<IEndpointTypeControllerDeleteEndpointTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IEndpointTypeControllerDeleteEndpointTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { endpointTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const endpointTypeControllerDeleteEndpointType: IEndpointTypeControllerDeleteEndpointType =
  async ({ endpointTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'EndpointTypeModel'
       * using the received 'endpointTypeId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      await EndpointTypeModel.findOneAndUpdate(
        {
          _id: endpointTypeId,
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
      stat.payload = { endpointTypeId };

      /*
       * Cast the response object to
       * 'IEndpointTypeControllerDeleteEndpointTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IEndpointTypeControllerDeleteEndpointTypeOutput'.
       */
      return stat as IEndpointTypeControllerDeleteEndpointTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IEndpointTypeControllerDeleteEndpointTypeOutputError',
       */
      return stat as IEndpointTypeControllerDeleteEndpointTypeOutputError;
    }
  };
