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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { endpointModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const endpointControllerUpdateEndpoint: IEndpointControllerUpdateEndpoint =
  async ({ endpointId, payload }) => {
    const stat = { ...baseStat };

    try {
      await EndpointModel.findOneAndUpdate(
        {
          _id: endpointId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { endpointId };
      return stat as IEndpointControllerUpdateEndpointOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IEndpointControllerUpdateEndpointOutputError;
    }
  };
