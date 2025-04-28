import { FrameworkTypeModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IFrameworkTypeControllerUpdateFrameworkType,
  IFrameworkTypeControllerUpdateFrameworkTypeOutputError,
  IFrameworkTypeControllerUpdateFrameworkTypeOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * frameworkTypeControllerUpdateFrameworkType
 *
 * The entity API update frameworkType controller.
 *
 * @param { IFrameworkTypeControllerUpdateFrameworkTypeInput } params
 * @param { Types.ObjectId } params.frameworkTypeId
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IFrameworkTypeControllerUpdateFrameworkTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { frameworkTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const frameworkTypeControllerUpdateFrameworkType: IFrameworkTypeControllerUpdateFrameworkType =
  async ({ frameworkTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      await FrameworkTypeModel.findOneAndUpdate(
        {
          _id: frameworkTypeId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { frameworkTypeId };
      return stat as IFrameworkTypeControllerUpdateFrameworkTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IFrameworkTypeControllerUpdateFrameworkTypeOutputError;
    }
  };
