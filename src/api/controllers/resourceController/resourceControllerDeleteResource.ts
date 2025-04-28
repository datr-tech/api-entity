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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { resourceModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const resourceControllerDeleteResource: IResourceControllerDeleteResource =
  async ({ resourceId }) => {
    const stat = { ...baseStat };

    try {
      await ResourceModel.findOneAndUpdate(
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

      stat.error = false;
      stat.payload = { resourceId };
      return stat as IResourceControllerDeleteResourceOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IResourceControllerDeleteResourceOutputError;
    }
  };
