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
 * @returns { Promise<IResourceControllerCreateResourceOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IResourceControllerCreateResourceOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { resourceModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
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
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
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

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'ResourceModel'.
       * 'db-entity'.
       */
      const resourceModel = new ResourceModel(modelParams);

      /*
       * The save the created model to the associated store: 'db-entity',
       */
      await resourceModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { resourceId: resourceModel.id };

      /*
       * Cast the response object to
       * 'IResourceControllerCreateResourceOutputSuccess',
       * where the casting interface is a component of
       * the binary union type
       * 'IResourceControllerCreateResourceOutput'.
       */
      return stat as IResourceControllerCreateResourceOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IResourceControllerCreateResourceOutputError',
       */
      return stat as IResourceControllerCreateResourceOutputError;
    }
  };
