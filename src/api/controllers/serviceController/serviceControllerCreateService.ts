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
 * @returns { Promise<IServiceControllerCreateServiceOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IServiceControllerCreateServiceOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { serviceModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
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
    /*
     * Populate the local 'modelParams' variable
     * with the received inputs.
     */
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

    /*
     * Use the populated 'modelParams' variable
     * to create a new instance of 'ServiceModel'.
     * 'db-entity'.
     */
    const serviceModel = new ServiceModel(modelParams);

    /*
     * The save the created model to the associated store: 'db-entity',
     */
    await serviceModel.save();

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = { serviceId: serviceModel.id };

    /*
     * Cast the response object to
     * 'IServiceControllerCreateServiceOutputSuccess',
     * where the casting interface is a component of
     * the binary union type
     * 'IServiceControllerCreateServiceOutput'.
     */
    return stat as IServiceControllerCreateServiceOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IServiceControllerCreateServiceOutputError',
     */
    return stat as IServiceControllerCreateServiceOutputError;
  }
};
