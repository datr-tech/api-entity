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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { endpointTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const endpointTypeControllerReadEndpointType: IEndpointTypeControllerReadEndpointType =
  async ({ endpointTypeId }) => {
    const stat = { ...baseStat };

    try {
      const endpointTypeModel = await EndpointTypeModel.findById(endpointTypeId);

      stat.error = false;
      stat.payload = { endpointTypeModel };
      return stat as IEndpointTypeControllerReadEndpointTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IEndpointTypeControllerReadEndpointTypeOutputError;
    }
  };
