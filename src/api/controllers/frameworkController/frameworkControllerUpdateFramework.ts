import { FrameworkModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IFrameworkControllerUpdateFramework,
  IFrameworkControllerUpdateFrameworkOutputError,
  IFrameworkControllerUpdateFrameworkOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * frameworkControllerUpdateFramework
 *
 * The entity API update framework controller.
 *
 * @param { IFrameworkControllerUpdateFrameworkInput } params
 * @param { Types.ObjectId } params.frameworkId
 * @param { Types.ObjectId } params.payload.frameworkTypeId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IFrameworkControllerUpdateFrameworkOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { frameworkModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const frameworkControllerUpdateFramework: IFrameworkControllerUpdateFramework =
  async ({ frameworkId, payload }) => {
    const stat = { ...baseStat };

    try {
      await FrameworkModel.findOneAndUpdate(
        {
          _id: frameworkId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { frameworkId };
      return stat as IFrameworkControllerUpdateFrameworkOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IFrameworkControllerUpdateFrameworkOutputError;
    }
  };
