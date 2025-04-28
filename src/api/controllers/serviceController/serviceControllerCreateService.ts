import { ServiceModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IServiceControllerCreateService,
  IServiceControllerCreateServiceOutputError,
  IServiceControllerCreateServiceOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * serviceControllerCreateService
 *
 * The entity API create service controller.
 *
 * @param { IServiceControllerCreateServiceInput } params
 * @param { Types.ObjectId } params.serviceId
 * @param { Types.ObjectId } params.frameworkId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IServiceControllerCreateServiceOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { serviceModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const serviceControllerCreateService: IServiceControllerCreateService = async ({
  frameworkId,
  description,
  name,
  adminStatusId,
  adminUserId,
  createdAt,
  updatedAt,
}) => {
  const stat = { ...baseStat };

  try {
    const serviceId = new Types.ObjectId();
    const modelParams = {
      serviceId,
      frameworkId,
      description,
      name,
      adminStatusId,
      adminUserId,
      createdAt,
      updatedAt,
    };

    const serviceModel = new ServiceModel(modelParams);
    await serviceModel.save();

    stat.error = false;
    stat.payload = { serviceId };
    return stat as IServiceControllerCreateServiceOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IServiceControllerCreateServiceOutputError;
  }
};
