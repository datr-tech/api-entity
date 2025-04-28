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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { endpointTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const endpointTypeControllerUpdateEndpointType: IEndpointTypeControllerUpdateEndpointType =
  async ({ endpointTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      await EndpointTypeModel.findOneAndUpdate(
        {
          _id: endpointTypeId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { endpointTypeId };
      return stat as IEndpointTypeControllerUpdateEndpointTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IEndpointTypeControllerUpdateEndpointTypeOutputError;
    }
  };
