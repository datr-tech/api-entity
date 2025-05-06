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
 * @returns { Promise<IResourceControllerUpdateResourceOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IResourceControllerUpdateResourceOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { resourceModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const resourceControllerUpdateResource: IResourceControllerUpdateResource =
  async ({ resourceId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'ResourceModel'
       * using the received 'resourceId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await ResourceModel.findOneAndUpdate(
        {
          _id: resourceId,
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
        resourceId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'IResourceControllerUpdateResourceOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IResourceControllerUpdateResourceOutput'.
       */
      return stat as IResourceControllerUpdateResourceOutputSuccess;
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
       * Cast the response object to 'IResourceControllerUpdateResourceOutputError',
       */
      return stat as IResourceControllerUpdateResourceOutputError;
    }
  };
