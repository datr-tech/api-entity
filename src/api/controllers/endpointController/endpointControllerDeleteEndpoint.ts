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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { endpointModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const endpointControllerDeleteEndpoint: IEndpointControllerDeleteEndpoint =
  async ({ endpointId }) => {
    const stat = { ...baseStat };

    try {
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

      stat.error = false;
      stat.payload = { endpointId };
      return stat as IEndpointControllerDeleteEndpointOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IEndpointControllerDeleteEndpointOutputError;
    }
  };
