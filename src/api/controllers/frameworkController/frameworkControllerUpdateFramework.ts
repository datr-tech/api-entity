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
 * @returns { Promise<IFrameworkControllerUpdateFrameworkOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IFrameworkControllerUpdateFrameworkOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { frameworkModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const frameworkControllerUpdateFramework: IFrameworkControllerUpdateFramework =
  async ({ frameworkId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'FrameworkModel'
       * using the received 'frameworkId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await FrameworkModel.findOneAndUpdate(
        {
          _id: frameworkId,
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
        frameworkId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'IFrameworkControllerUpdateFrameworkOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IFrameworkControllerUpdateFrameworkOutput'.
       */
      return stat as IFrameworkControllerUpdateFrameworkOutputSuccess;
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
       * Cast the response object to 'IFrameworkControllerUpdateFrameworkOutputError',
       */
      return stat as IFrameworkControllerUpdateFrameworkOutputError;
    }
  };
