import { ResourceModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IResourceControllerReadResource,
  IResourceControllerReadResourceOutputError,
  IResourceControllerReadResourceOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * resourceControllerReadResource
 *
 * The entity API read resource controller.
 *
 * @param { IResourceControllerReadResourceInput } params
 * @param { Types.ObjectId } params.resourceId
 *
 * @returns { Promise<IResourceControllerReadResourceOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { resourceModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const resourceControllerReadResource: IResourceControllerReadResource = async ({
  resourceId,
}) => {
  const stat = { ...baseStat };

  try {
    const resourceModel = await ResourceModel.findById(resourceId);

    stat.error = false;
    stat.payload = { resourceModel };
    return stat as IResourceControllerReadResourceOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IResourceControllerReadResourceOutputError;
  }
};
