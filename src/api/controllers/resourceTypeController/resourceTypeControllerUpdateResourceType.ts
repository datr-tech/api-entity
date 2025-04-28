import { ResourceTypeModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IResourceTypeControllerUpdateResourceType,
  IResourceTypeControllerUpdateResourceTypeOutputError,
  IResourceTypeControllerUpdateResourceTypeOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * resourceTypeControllerUpdateResourceType
 *
 * The entity API update resourceType controller.
 *
 * @param { IResourceTypeControllerUpdateResourceTypeInput } params
 * @param { Types.ObjectId } params.resourceTypeId
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IResourceTypeControllerUpdateResourceTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { resourceTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const resourceTypeControllerUpdateResourceType: IResourceTypeControllerUpdateResourceType =
  async ({ resourceTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      await ResourceTypeModel.findOneAndUpdate(
        {
          _id: resourceTypeId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { resourceTypeId };
      return stat as IResourceTypeControllerUpdateResourceTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IResourceTypeControllerUpdateResourceTypeOutputError;
    }
  };
