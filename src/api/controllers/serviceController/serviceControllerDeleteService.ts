import { ServiceModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IServiceControllerDeleteService,
  IServiceControllerDeleteServiceOutputError,
  IServiceControllerDeleteServiceOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * serviceControllerDeleteService
 *
 * The entity API delete service controller.
 *
 * @param { IServiceControllerDeleteServiceInput } params
 * @param { Types.ObjectId } params.serviceId
 *
 * @returns { Promise<IServiceControllerDeleteServiceOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { serviceModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const serviceControllerDeleteService: IServiceControllerDeleteService = async ({
  serviceId,
}) => {
  const stat = { ...baseStat };

  try {
    await ServiceModel.findOneAndUpdate(
      {
        _id: serviceId,
      },
      {
        adminStatusId: new Types.ObjectId(),
      },
      {
        includeResultMetadata: true,
      },
    );

    stat.error = false;
    stat.payload = { serviceId };
    return stat as IServiceControllerDeleteServiceOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IServiceControllerDeleteServiceOutputError;
  }
};
