import { ResourceTypeModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IResourceTypeControllerReadResourceType,
  IResourceTypeControllerReadResourceTypeOutputError,
  IResourceTypeControllerReadResourceTypeOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * resourceTypeControllerReadResourceType
 *
 * The entity API read resourceType controller.
 *
 * @param { IResourceTypeControllerReadResourceTypeInput } params
 * @param { Types.ObjectId } params.resourceTypeId
 *
 * @returns { Promise<IResourceTypeControllerReadResourceTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { resourceTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const resourceTypeControllerReadResourceType: IResourceTypeControllerReadResourceType =
  async ({ resourceTypeId }) => {
    const stat = { ...baseStat };

    try {
      const resourceTypeModel = await ResourceTypeModel.findById(resourceTypeId);

      stat.error = false;
      stat.payload = { resourceTypeModel };
      return stat as IResourceTypeControllerReadResourceTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IResourceTypeControllerReadResourceTypeOutputError;
    }
  };
