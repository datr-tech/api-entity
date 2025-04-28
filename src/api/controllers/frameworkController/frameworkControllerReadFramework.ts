import { FrameworkModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IFrameworkControllerReadFramework,
  IFrameworkControllerReadFrameworkOutputError,
  IFrameworkControllerReadFrameworkOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * frameworkControllerReadFramework
 *
 * The entity API read framework controller.
 *
 * @param { IFrameworkControllerReadFrameworkInput } params
 * @param { Types.ObjectId } params.frameworkId
 *
 * @returns { Promise<IFrameworkControllerReadFrameworkOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { frameworkModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const frameworkControllerReadFramework: IFrameworkControllerReadFramework =
  async ({ frameworkId }) => {
    const stat = { ...baseStat };

    try {
      const frameworkModel = await FrameworkModel.findById(frameworkId);

      stat.error = false;
      stat.payload = { frameworkModel };
      return stat as IFrameworkControllerReadFrameworkOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IFrameworkControllerReadFrameworkOutputError;
    }
  };
