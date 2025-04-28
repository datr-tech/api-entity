import { FrameworkTypeModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IFrameworkTypeControllerReadFrameworkType,
  IFrameworkTypeControllerReadFrameworkTypeOutputError,
  IFrameworkTypeControllerReadFrameworkTypeOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * frameworkTypeControllerReadFrameworkType
 *
 * The entity API read frameworkType controller.
 *
 * @param { IFrameworkTypeControllerReadFrameworkTypeInput } params
 * @param { Types.ObjectId } params.frameworkTypeId
 *
 * @returns { Promise<IFrameworkTypeControllerReadFrameworkTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { frameworkTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const frameworkTypeControllerReadFrameworkType: IFrameworkTypeControllerReadFrameworkType =
  async ({ frameworkTypeId }) => {
    const stat = { ...baseStat };

    try {
      const frameworkTypeModel = await FrameworkTypeModel.findById(frameworkTypeId);

      stat.error = false;
      stat.payload = { frameworkTypeModel };
      return stat as IFrameworkTypeControllerReadFrameworkTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IFrameworkTypeControllerReadFrameworkTypeOutputError;
    }
  };
