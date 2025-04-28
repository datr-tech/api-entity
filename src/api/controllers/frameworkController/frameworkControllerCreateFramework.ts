import { FrameworkModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IFrameworkControllerCreateFramework,
  IFrameworkControllerCreateFrameworkOutputError,
  IFrameworkControllerCreateFrameworkOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * frameworkControllerCreateFramework
 *
 * The entity API create framework controller.
 *
 * @param { IFrameworkControllerCreateFrameworkInput } params
 * @param { Types.ObjectId } params.frameworkId
 * @param { Types.ObjectId } params.frameworkTypeId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IFrameworkControllerCreateFrameworkOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { frameworkModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const frameworkControllerCreateFramework: IFrameworkControllerCreateFramework =
  async ({
    frameworkTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
    createdAt,
    updatedAt,
  }) => {
    const stat = { ...baseStat };

    try {
      const frameworkId = new Types.ObjectId();
      const modelParams = {
        frameworkId,
        frameworkTypeId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      const frameworkModel = new FrameworkModel(modelParams);
      await frameworkModel.save();

      stat.error = false;
      stat.payload = { frameworkId };
      return stat as IFrameworkControllerCreateFrameworkOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IFrameworkControllerCreateFrameworkOutputError;
    }
  };
