import { ServiceModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IServiceControllerUpdateService,
  IServiceControllerUpdateServiceOutputError,
  IServiceControllerUpdateServiceOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * serviceControllerUpdateService
 *
 * The entity API update service controller.
 *
 * @param { IServiceControllerUpdateServiceInput } params
 * @param { Types.ObjectId } params.serviceId
 * @param { Types.ObjectId } params.payload.frameworkId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IServiceControllerUpdateServiceOutput> }
 * @returns { Promise<IServiceControllerUpdateServiceOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IServiceControllerUpdateServiceOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { serviceModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const serviceControllerUpdateService: IServiceControllerUpdateService = async ({
  serviceId,
  payload,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'ServiceModel'
     * using the received 'serviceId' param.
     * When successful, update the found model using
     * the key value pairs (or fields) from within the
     * 'payload' param.
     */
    await ServiceModel.findOneAndUpdate(
      {
        _id: serviceId,
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
    stat.payload = { serviceId };

    /*
     * Cast the response object to 'IServiceControllerUpdateServiceOutputSuccess',
     * where the casting interface is a component of the binary union type
     * 'IServiceControllerUpdateServiceOutput'.
     */
    return stat as IServiceControllerUpdateServiceOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IServiceControllerUpdateServiceOutputError',
     */
    return stat as IServiceControllerUpdateServiceOutputError;
  }
};
