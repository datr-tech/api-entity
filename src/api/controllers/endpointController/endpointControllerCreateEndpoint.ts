import { EndpointModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IEndpointControllerCreateEndpoint,
  IEndpointControllerCreateEndpointOutputError,
  IEndpointControllerCreateEndpointOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * endpointControllerCreateEndpoint
 *
 * The entity API create endpoint controller.
 *
 * @param { IEndpointControllerCreateEndpointInput } params
 * @param { Types.ObjectId } params.endpointId
 * @param { Types.ObjectId } params.endpointTypeId
 * @param { string } params.url
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IEndpointControllerCreateEndpointOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { endpointModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const endpointControllerCreateEndpoint: IEndpointControllerCreateEndpoint =
  async ({
    endpointTypeId,
    url,
    description,
    name,
    adminStatusId,
    adminUserId,
    createdAt,
    updatedAt,
  }) => {
    const stat = { ...baseStat };

    try {
      const endpointId = new Types.ObjectId();
      const modelParams = {
        endpointId,
        endpointTypeId,
        url,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      const endpointModel = new EndpointModel(modelParams);
      await endpointModel.save();

      stat.error = false;
      stat.payload = { endpointId };
      return stat as IEndpointControllerCreateEndpointOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IEndpointControllerCreateEndpointOutputError;
    }
  };
