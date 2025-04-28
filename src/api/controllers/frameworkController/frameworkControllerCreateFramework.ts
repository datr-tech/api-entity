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
 * @returns { Promise<IFrameworkControllerCreateFrameworkOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IFrameworkControllerCreateFrameworkOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { frameworkModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
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
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
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

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'FrameworkModel'.
       * 'db-entity'.
       */
      const frameworkModel = new FrameworkModel(modelParams);

      /*
       * The save the created model to the associated store: 'db-entity',
       */
      await frameworkModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { frameworkId: frameworkModel.id };

      /*
       * Cast the response object to
       * 'IFrameworkControllerCreateFrameworkOutputSuccess',
       * where the casting interface is a component of
       * the binary union type
       * 'IFrameworkControllerCreateFrameworkOutput'.
       */
      return stat as IFrameworkControllerCreateFrameworkOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IFrameworkControllerCreateFrameworkOutputError',
       */
      return stat as IFrameworkControllerCreateFrameworkOutputError;
    }
  };
