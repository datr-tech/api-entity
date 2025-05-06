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
 * @returns { Promise<IFrameworkTypeControllerUpdateFrameworkTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IFrameworkTypeControllerUpdateFrameworkTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { frameworkTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const frameworkTypeControllerUpdateFrameworkType: IFrameworkTypeControllerUpdateFrameworkType =
  async ({ frameworkTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'FrameworkTypeModel'
       * using the received 'frameworkTypeId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await FrameworkTypeModel.findOneAndUpdate(
        {
          _id: frameworkTypeId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      /*
       * Use the standard controller response object,
       * 'stat', to return the updated model's primary key.
       */
      stat.error = false;
      stat.payload = {
        frameworkTypeId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'IFrameworkTypeControllerUpdateFrameworkTypeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IFrameworkTypeControllerUpdateFrameworkTypeOutput'.
       */
      return stat as IFrameworkTypeControllerUpdateFrameworkTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = {
        message,
        responseStatusCode: 404,
      };

      /*
       * Cast the response object to 'IFrameworkTypeControllerUpdateFrameworkTypeOutputError',
       */
      return stat as IFrameworkTypeControllerUpdateFrameworkTypeOutputError;
    }
  };
