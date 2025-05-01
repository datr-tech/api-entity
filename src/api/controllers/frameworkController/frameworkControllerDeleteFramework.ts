import { FrameworkModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IFrameworkControllerDeleteFramework,
  IFrameworkControllerDeleteFrameworkOutputError,
  IFrameworkControllerDeleteFrameworkOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * frameworkControllerDeleteFramework
 *
 * The entity API delete framework controller.
 *
 * @param { IFrameworkControllerDeleteFrameworkInput } params
 * @param { Types.ObjectId } params.frameworkId
 *
 * @returns { Promise<IFrameworkControllerDeleteFrameworkOutput> }
 * @returns { Promise<IFrameworkControllerDeleteFrameworkOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IFrameworkControllerDeleteFrameworkOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { frameworkModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const frameworkControllerDeleteFramework: IFrameworkControllerDeleteFramework =
  async ({ frameworkId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'FrameworkModel'
       * using the received 'frameworkId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      await FrameworkModel.findOneAndUpdate(
        {
          _id: frameworkId,
        },
        {
          adminStatusId: new Types.ObjectId(),
        },
        {
          includeResultMetadata: true,
        },
      );

      /*
       * Use the standard controller response object,
       * 'stat', to return the primary key of the
       * "soft deleted" model.
       */
      stat.error = false;
      stat.payload = { frameworkId };

      /*
       * Cast the response object to
       * 'IFrameworkControllerDeleteFrameworkOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IFrameworkControllerDeleteFrameworkOutput'.
       */
      return stat as IFrameworkControllerDeleteFrameworkOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IFrameworkControllerDeleteFrameworkOutputError',
       */
      return stat as IFrameworkControllerDeleteFrameworkOutputError;
    }
  };
