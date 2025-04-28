import { FrameworkTypeModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IFrameworkTypeControllerCreateFrameworkType,
  IFrameworkTypeControllerCreateFrameworkTypeOutputError,
  IFrameworkTypeControllerCreateFrameworkTypeOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * frameworkTypeControllerCreateFrameworkType
 *
 * The entity API create frameworkType controller.
 *
 * @param { IFrameworkTypeControllerCreateFrameworkTypeInput } params
 * @param { Types.ObjectId } params.frameworkTypeId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IFrameworkTypeControllerCreateFrameworkTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { frameworkTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const frameworkTypeControllerCreateFrameworkType: IFrameworkTypeControllerCreateFrameworkType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      const frameworkTypeId = new Types.ObjectId();
      const modelParams = {
        frameworkTypeId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      const frameworkTypeModel = new FrameworkTypeModel(modelParams);
      await frameworkTypeModel.save();

      stat.error = false;
      stat.payload = { frameworkTypeId };
      return stat as IFrameworkTypeControllerCreateFrameworkTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IFrameworkTypeControllerCreateFrameworkTypeOutputError;
    }
  };
