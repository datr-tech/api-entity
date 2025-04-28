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
 * @returns { Promise<IResourceControllerReadResourceOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IResourceControllerReadResourceOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { resourceModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const resourceControllerReadResource: IResourceControllerReadResource = async ({
  resourceId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'ResourceModel'
     * using the received 'resourceId' param.
     */
    const resourceModel = await ResourceModel.findById(resourceId);

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = { resourceModel };

    /*
     * Cast the response object to
     * 'IResourceControllerReadResourceOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IResourceControllerReadResourceOutput'.
     */
    return stat as IResourceControllerReadResourceOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IResourceControllerReadResourceOutputError',
     */
    return stat as IResourceControllerReadResourceOutputError;
  }
};
