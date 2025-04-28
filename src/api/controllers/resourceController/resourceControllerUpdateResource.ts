import { ResourceModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IResourceControllerUpdateResource,
  IResourceControllerUpdateResourceOutputError,
  IResourceControllerUpdateResourceOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * resourceControllerUpdateResource
 *
 * The entity API update resource controller.
 *
 * @param { IResourceControllerUpdateResourceInput } params
 * @param { Types.ObjectId } params.resourceId
 * @param { Types.ObjectId } params.payload.endpointId  (Optional)
 * @param { Types.ObjectId } params.payload.resourceTypeId  (Optional)
 * @param { Types.ObjectId } params.payload.serviceId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IResourceControllerUpdateResourceOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { resourceModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const resourceControllerUpdateResource: IResourceControllerUpdateResource =
  async ({ resourceId, payload }) => {
    const stat = { ...baseStat };

    try {
      await ResourceModel.findOneAndUpdate(
        {
          _id: resourceId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { resourceId };
      return stat as IResourceControllerUpdateResourceOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IResourceControllerUpdateResourceOutputError;
    }
  };
