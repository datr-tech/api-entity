import { FrameworkTypeModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IFrameworkTypeControllerDeleteFrameworkType,
  IFrameworkTypeControllerDeleteFrameworkTypeOutputError,
  IFrameworkTypeControllerDeleteFrameworkTypeOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * frameworkTypeControllerDeleteFrameworkType
 *
 * The entity API delete frameworkType controller.
 *
 * @param { IFrameworkTypeControllerDeleteFrameworkTypeInput } params
 * @param { Types.ObjectId } params.frameworkTypeId
 *
 * @returns { Promise<IFrameworkTypeControllerDeleteFrameworkTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { frameworkTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const frameworkTypeControllerDeleteFrameworkType: IFrameworkTypeControllerDeleteFrameworkType =
  async ({ frameworkTypeId }) => {
    const stat = { ...baseStat };

    try {
      await FrameworkTypeModel.findOneAndUpdate(
        {
          _id: frameworkTypeId,
        },
        {
          adminStatusId: new Types.ObjectId(),
        },
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { frameworkTypeId };
      return stat as IFrameworkTypeControllerDeleteFrameworkTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IFrameworkTypeControllerDeleteFrameworkTypeOutputError;
    }
  };
