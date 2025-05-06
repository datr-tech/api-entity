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
 * @returns { Promise<IResourceTypeControllerDeleteResourceTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IResourceTypeControllerDeleteResourceTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { resourceTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const resourceTypeControllerDeleteResourceType: IResourceTypeControllerDeleteResourceType =
  async ({ resourceTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'ResourceTypeModel'
       * using the received 'resourceTypeId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
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

      /*
       * Use the standard controller response object,
       * 'stat', to return the primary key of the
       * "soft deleted" model.
       */
      stat.error = false;
      stat.payload = {
        resourceTypeId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to
       * 'IResourceTypeControllerDeleteResourceTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IResourceTypeControllerDeleteResourceTypeOutput'.
       */
      return stat as IResourceTypeControllerDeleteResourceTypeOutputSuccess;
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
       * Cast the response object to 'IResourceTypeControllerDeleteResourceTypeOutputError',
       */
      return stat as IResourceTypeControllerDeleteResourceTypeOutputError;
    }
  };
