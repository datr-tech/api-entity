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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { serviceModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const serviceControllerUpdateService: IServiceControllerUpdateService = async ({
  serviceId,
  payload,
}) => {
  const stat = { ...baseStat };

  try {
    await ServiceModel.findOneAndUpdate(
      {
        _id: serviceId,
      },
      payload,
      {
        includeResultMetadata: true,
      },
    );

    stat.error = false;
    stat.payload = { serviceId };
    return stat as IServiceControllerUpdateServiceOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IServiceControllerUpdateServiceOutputError;
  }
};
