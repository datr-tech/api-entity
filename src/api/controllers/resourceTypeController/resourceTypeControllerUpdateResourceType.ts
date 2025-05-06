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
 * @returns { Promise<IResourceTypeControllerUpdateResourceTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IResourceTypeControllerUpdateResourceTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { resourceTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const resourceTypeControllerUpdateResourceType: IResourceTypeControllerUpdateResourceType =
  async ({ resourceTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'ResourceTypeModel'
       * using the received 'resourceTypeId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await ResourceTypeModel.findOneAndUpdate(
        {
          _id: resourceTypeId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      /*
       * Use the standard controller response object,
       * 'stat', to return the updated model's primary key.
       */
      stat.error = false;
      stat.payload = {
        resourceTypeId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'IResourceTypeControllerUpdateResourceTypeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IResourceTypeControllerUpdateResourceTypeOutput'.
       */
      return stat as IResourceTypeControllerUpdateResourceTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = {
        message,
        responseStatusCode: 404,
      };

      /*
       * Cast the response object to 'IResourceTypeControllerUpdateResourceTypeOutputError',
       */
      return stat as IResourceTypeControllerUpdateResourceTypeOutputError;
    }
  };
