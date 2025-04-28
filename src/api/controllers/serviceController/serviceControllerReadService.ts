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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { serviceModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const serviceControllerReadService: IServiceControllerReadService = async ({
  serviceId,
}) => {
  const stat = { ...baseStat };

  try {
    const serviceModel = await ServiceModel.findById(serviceId);

    stat.error = false;
    stat.payload = { serviceModel };
    return stat as IServiceControllerReadServiceOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IServiceControllerReadServiceOutputError;
  }
};
