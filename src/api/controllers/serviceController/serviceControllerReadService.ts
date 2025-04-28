import { ServiceModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IServiceControllerReadService,
  IServiceControllerReadServiceOutputError,
  IServiceControllerReadServiceOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * serviceControllerReadService
 *
 * The entity API read service controller.
 *
 * @param { IServiceControllerReadServiceInput } params
 * @param { Types.ObjectId } params.serviceId
 *
 * @returns { Promise<IServiceControllerReadServiceOutput> }
 * @returns { Promise<IServiceControllerReadServiceOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IServiceControllerReadServiceOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { serviceModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const serviceControllerReadService: IServiceControllerReadService = async ({
  serviceId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'ServiceModel'
     * using the received 'serviceId' param.
     */
    const serviceModel = await ServiceModel.findById(serviceId);

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = { serviceModel };

    /*
     * Cast the response object to
     * 'IServiceControllerReadServiceOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IServiceControllerReadServiceOutput'.
     */
    return stat as IServiceControllerReadServiceOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IServiceControllerReadServiceOutputError',
     */
    return stat as IServiceControllerReadServiceOutputError;
  }
};
