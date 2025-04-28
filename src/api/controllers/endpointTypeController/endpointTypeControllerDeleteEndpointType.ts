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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { endpointTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const endpointTypeControllerDeleteEndpointType: IEndpointTypeControllerDeleteEndpointType =
  async ({ endpointTypeId }) => {
    const stat = { ...baseStat };

    try {
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

      stat.error = false;
      stat.payload = { endpointTypeId };
      return stat as IEndpointTypeControllerDeleteEndpointTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IEndpointTypeControllerDeleteEndpointTypeOutputError;
    }
  };
