import { ResourceModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IResourceControllerCreateResource,
  IResourceControllerCreateResourceOutputError,
  IResourceControllerCreateResourceOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * resourceControllerCreateResource
 *
 * The entity API create resource controller.
 *
 * @param { IResourceControllerCreateResourceInput } params
 * @param { Types.ObjectId } params.resourceId
 * @param { Types.ObjectId } params.endpointId
 * @param { Types.ObjectId } params.resourceTypeId
 * @param { Types.ObjectId } params.serviceId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IResourceControllerCreateResourceOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { resourceModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const resourceControllerCreateResource: IResourceControllerCreateResource =
  async ({
    endpointId,
    resourceTypeId,
    serviceId,
    description,
    name,
    adminStatusId,
    adminUserId,
    createdAt,
    updatedAt,
  }) => {
    const stat = { ...baseStat };

    try {
      const resourceId = new Types.ObjectId();
      const modelParams = {
        resourceId,
        endpointId,
        resourceTypeId,
        serviceId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      const resourceModel = new ResourceModel(modelParams);
      await resourceModel.save();

      stat.error = false;
      stat.payload = { resourceId };
      return stat as IResourceControllerCreateResourceOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IResourceControllerCreateResourceOutputError;
    }
  };
