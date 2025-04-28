import { FrameworkModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IFrameworkControllerReadFramework,
  IFrameworkControllerReadFrameworkOutputError,
  IFrameworkControllerReadFrameworkOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * frameworkControllerReadFramework
 *
 * The entity API read framework controller.
 *
 * @param { IFrameworkControllerReadFrameworkInput } params
 * @param { Types.ObjectId } params.frameworkId
 *
 * @returns { Promise<IFrameworkControllerReadFrameworkOutput> }
 * @returns { Promise<IFrameworkControllerReadFrameworkOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IFrameworkControllerReadFrameworkOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { frameworkModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const frameworkControllerReadFramework: IFrameworkControllerReadFramework =
  async ({ frameworkId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'FrameworkModel'
       * using the received 'frameworkId' param.
       */
      const frameworkModel = await FrameworkModel.findById(frameworkId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { frameworkModel };

      /*
       * Cast the response object to
       * 'IFrameworkControllerReadFrameworkOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IFrameworkControllerReadFrameworkOutput'.
       */
      return stat as IFrameworkControllerReadFrameworkOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IFrameworkControllerReadFrameworkOutputError',
       */
      return stat as IFrameworkControllerReadFrameworkOutputError;
    }
  };
