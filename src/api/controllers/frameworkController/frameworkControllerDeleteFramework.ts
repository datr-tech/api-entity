import { FrameworkModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IFrameworkControllerDeleteFramework,
  IFrameworkControllerDeleteFrameworkOutputError,
  IFrameworkControllerDeleteFrameworkOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * frameworkControllerDeleteFramework
 *
 * The entity API delete framework controller.
 *
 * @param { IFrameworkControllerDeleteFrameworkInput } params
 * @param { Types.ObjectId } params.frameworkId
 *
 * @returns { Promise<IFrameworkControllerDeleteFrameworkOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { frameworkModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const frameworkControllerDeleteFramework: IFrameworkControllerDeleteFramework =
  async ({ frameworkId }) => {
    const stat = { ...baseStat };

    try {
      await FrameworkModel.findOneAndUpdate(
        {
          _id: frameworkId,
        },
        {
          adminStatusId: new Types.ObjectId(),
        },
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { frameworkId };
      return stat as IFrameworkControllerDeleteFrameworkOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IFrameworkControllerDeleteFrameworkOutputError;
    }
  };
