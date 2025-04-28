import { ResourceTypeModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IResourceTypeControllerCreateResourceType,
  IResourceTypeControllerCreateResourceTypeOutputError,
  IResourceTypeControllerCreateResourceTypeOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * resourceTypeControllerCreateResourceType
 *
 * The entity API create resourceType controller.
 *
 * @param { IResourceTypeControllerCreateResourceTypeInput } params
 * @param { Types.ObjectId } params.resourceTypeId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IResourceTypeControllerCreateResourceTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { resourceTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const resourceTypeControllerCreateResourceType: IResourceTypeControllerCreateResourceType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      const resourceTypeId = new Types.ObjectId();
      const modelParams = {
        resourceTypeId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      const resourceTypeModel = new ResourceTypeModel(modelParams);
      await resourceTypeModel.save();

      stat.error = false;
      stat.payload = { resourceTypeId };
      return stat as IResourceTypeControllerCreateResourceTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IResourceTypeControllerCreateResourceTypeOutputError;
    }
  };
