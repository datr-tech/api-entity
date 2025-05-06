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
 * @returns { Promise<IServiceControllerDeleteServiceOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IServiceControllerDeleteServiceOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { serviceModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const serviceControllerDeleteService: IServiceControllerDeleteService = async ({
  serviceId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'ServiceModel'
     * using the received 'serviceId' param.
     * When successful, perform a "soft delete" upon the
     * found model by updating the value of the model's
     * 'adminStatusId' field.
     */
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

    /*
     * Use the standard controller response object,
     * 'stat', to return the primary key of the
     * "soft deleted" model.
     */
    stat.error = false;
    stat.payload = {
      serviceId,
      responseStatusCode: 200,
    };

    /*
     * Cast the response object to
     * 'IServiceControllerDeleteServiceOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IServiceControllerDeleteServiceOutput'.
     */
    return stat as IServiceControllerDeleteServiceOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = {
      message,
      responseStatusCode: 404,
    };

    /*
     * Cast the response object to 'IServiceControllerDeleteServiceOutputError',
     */
    return stat as IServiceControllerDeleteServiceOutputError;
  }
};
