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
 * @returns { Promise<IFrameworkTypeControllerCreateFrameworkTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IFrameworkTypeControllerCreateFrameworkTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { frameworkTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const frameworkTypeControllerCreateFrameworkType: IFrameworkTypeControllerCreateFrameworkType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
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

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'FrameworkTypeModel'.
       * 'db-entity'. Then save the created
       * model to the associated store: 'db-entity',
       */
      const frameworkTypeModel = new FrameworkTypeModel(modelParams);
      await frameworkTypeModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model's primary key.
       */
      stat.error = false;
      stat.payload = { frameworkTypeId };

      /*
       * Cast the response object to
       * 'IFrameworkTypeControllerCreateFrameworkTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IFrameworkTypeControllerCreateFrameworkTypeOutput'.
       */
      return stat as IFrameworkTypeControllerCreateFrameworkTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IFrameworkTypeControllerCreateFrameworkTypeOutputError',
       */
      return stat as IFrameworkTypeControllerCreateFrameworkTypeOutputError;
    }
  };
