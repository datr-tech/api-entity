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
 * @returns { Promise<IResourceTypeControllerCreateResourceTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IResourceTypeControllerCreateResourceTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { resourceTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const resourceTypeControllerCreateResourceType: IResourceTypeControllerCreateResourceType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
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

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'ResourceTypeModel'.
       * 'db-entity'.
       */
      const resourceTypeModel = new ResourceTypeModel(modelParams);

      /*
       * The save the created model to the associated store: 'db-entity',
       */
      await resourceTypeModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { resourceTypeId: resourceTypeModel.id };

      /*
       * Cast the response object to
       * 'IResourceTypeControllerCreateResourceTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type
       * 'IResourceTypeControllerCreateResourceTypeOutput'.
       */
      return stat as IResourceTypeControllerCreateResourceTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IResourceTypeControllerCreateResourceTypeOutputError',
       */
      return stat as IResourceTypeControllerCreateResourceTypeOutputError;
    }
  };
