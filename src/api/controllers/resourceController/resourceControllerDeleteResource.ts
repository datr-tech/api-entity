import { ResourceModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IResourceControllerDeleteResource,
  IResourceControllerDeleteResourceOutputError,
  IResourceControllerDeleteResourceOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * resourceControllerDeleteResource
 *
 * The entity API delete resource controller.
 *
 * @param { IResourceControllerDeleteResourceInput } params
 * @param { Types.ObjectId } params.resourceId
 *
 * @returns { Promise<IResourceControllerDeleteResourceOutput> }
 * @returns { Promise<IResourceControllerDeleteResourceOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IResourceControllerDeleteResourceOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { resourceModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const resourceControllerDeleteResource: IResourceControllerDeleteResource =
  async ({ resourceId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'ResourceModel'
       * using the received 'resourceId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      const resourceModel = await ResourceModel.findOneAndUpdate(
        {
          _id: resourceId,
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
      stat.payload = { resourceId: resourceModel.id };

      /*
       * Cast the response object to
       * 'IResourceControllerDeleteResourceOutputSuccess',
       * where the casting interface is a component of
       * the binary union type
       * 'IResourceControllerDeleteResourceOutput'.
       */
      return stat as IResourceControllerDeleteResourceOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IResourceControllerDeleteResourceOutputError',
       */
      return stat as IResourceControllerDeleteResourceOutputError;
    }
  };
