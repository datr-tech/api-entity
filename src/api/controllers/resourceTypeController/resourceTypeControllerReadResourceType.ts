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
 * @returns { Promise<IResourceTypeControllerReadResourceTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IResourceTypeControllerReadResourceTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { resourceTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const resourceTypeControllerReadResourceType: IResourceTypeControllerReadResourceType =
  async ({ resourceTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'ResourceTypeModel'
       * using the received 'resourceTypeId' param.
       */
      const resourceTypeModel = await ResourceTypeModel.findById(resourceTypeId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = {
        resourceTypeModel,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to
       * 'IResourceTypeControllerReadResourceTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IResourceTypeControllerReadResourceTypeOutput'.
       */
      return stat as IResourceTypeControllerReadResourceTypeOutputSuccess;
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
       * Cast the response object to 'IResourceTypeControllerReadResourceTypeOutputError',
       */
      return stat as IResourceTypeControllerReadResourceTypeOutputError;
    }
  };
