import { ResourceTypeModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IResourceTypeControllerDeleteResourceType,
  IResourceTypeControllerDeleteResourceTypeOutputError,
  IResourceTypeControllerDeleteResourceTypeOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * resourceTypeControllerDeleteResourceType
 *
 * The entity API delete resourceType controller.
 *
 * @param { IResourceTypeControllerDeleteResourceTypeInput } params
 * @param { Types.ObjectId } params.resourceTypeId
 *
 * @returns { Promise<IResourceTypeControllerDeleteResourceTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { resourceTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const resourceTypeControllerDeleteResourceType: IResourceTypeControllerDeleteResourceType =
  async ({ resourceTypeId }) => {
    const stat = { ...baseStat };

    try {
      await ResourceTypeModel.findOneAndUpdate(
        {
          _id: resourceTypeId,
        },
        {
          adminStatusId: new Types.ObjectId(),
        },
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { resourceTypeId };
      return stat as IResourceTypeControllerDeleteResourceTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IResourceTypeControllerDeleteResourceTypeOutputError;
    }
  };
