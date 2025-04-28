import { FrameworkTypeModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IFrameworkTypeControllerReadFrameworkType,
  IFrameworkTypeControllerReadFrameworkTypeOutputError,
  IFrameworkTypeControllerReadFrameworkTypeOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * frameworkTypeControllerReadFrameworkType
 *
 * The entity API read frameworkType controller.
 *
 * @param { IFrameworkTypeControllerReadFrameworkTypeInput } params
 * @param { Types.ObjectId } params.frameworkTypeId
 *
 * @returns { Promise<IFrameworkTypeControllerReadFrameworkTypeOutput> }
 * @returns { Promise<IFrameworkTypeControllerReadFrameworkTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IFrameworkTypeControllerReadFrameworkTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { frameworkTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const frameworkTypeControllerReadFrameworkType: IFrameworkTypeControllerReadFrameworkType =
  async ({ frameworkTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'FrameworkTypeModel'
       * using the received 'frameworkTypeId' param.
       */
      const frameworkTypeModel = await FrameworkTypeModel.findById(frameworkTypeId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { frameworkTypeModel };

      /*
       * Cast the response object to
       * 'IFrameworkTypeControllerReadFrameworkTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IFrameworkTypeControllerReadFrameworkTypeOutput'.
       */
      return stat as IFrameworkTypeControllerReadFrameworkTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IFrameworkTypeControllerReadFrameworkTypeOutputError',
       */
      return stat as IFrameworkTypeControllerReadFrameworkTypeOutputError;
    }
  };
