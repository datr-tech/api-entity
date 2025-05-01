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
 * @returns { Promise<IFrameworkTypeControllerDeleteFrameworkTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IFrameworkTypeControllerDeleteFrameworkTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { frameworkTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const frameworkTypeControllerDeleteFrameworkType: IFrameworkTypeControllerDeleteFrameworkType =
  async ({ frameworkTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'FrameworkTypeModel'
       * using the received 'frameworkTypeId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
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

      /*
       * Use the standard controller response object,
       * 'stat', to return the primary key of the
       * "soft deleted" model.
       */
      stat.error = false;
      stat.payload = { frameworkTypeId };

      /*
       * Cast the response object to
       * 'IFrameworkTypeControllerDeleteFrameworkTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IFrameworkTypeControllerDeleteFrameworkTypeOutput'.
       */
      return stat as IFrameworkTypeControllerDeleteFrameworkTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IFrameworkTypeControllerDeleteFrameworkTypeOutputError',
       */
      return stat as IFrameworkTypeControllerDeleteFrameworkTypeOutputError;
    }
  };
