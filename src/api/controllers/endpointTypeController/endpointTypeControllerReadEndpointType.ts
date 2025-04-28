import { EndpointTypeModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IEndpointTypeControllerReadEndpointType,
  IEndpointTypeControllerReadEndpointTypeOutputError,
  IEndpointTypeControllerReadEndpointTypeOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * endpointTypeControllerReadEndpointType
 *
 * The entity API read endpointType controller.
 *
 * @param { IEndpointTypeControllerReadEndpointTypeInput } params
 * @param { Types.ObjectId } params.endpointTypeId
 *
 * @returns { Promise<IEndpointTypeControllerReadEndpointTypeOutput> }
 * @returns { Promise<IEndpointTypeControllerReadEndpointTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IEndpointTypeControllerReadEndpointTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { endpointTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const endpointTypeControllerReadEndpointType: IEndpointTypeControllerReadEndpointType =
  async ({ endpointTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'EndpointTypeModel'
       * using the received 'endpointTypeId' param.
       */
      const endpointTypeModel = await EndpointTypeModel.findById(endpointTypeId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { endpointTypeModel };

      /*
       * Cast the response object to
       * 'IEndpointTypeControllerReadEndpointTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IEndpointTypeControllerReadEndpointTypeOutput'.
       */
      return stat as IEndpointTypeControllerReadEndpointTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IEndpointTypeControllerReadEndpointTypeOutputError',
       */
      return stat as IEndpointTypeControllerReadEndpointTypeOutputError;
    }
  };
