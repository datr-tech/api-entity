import { EndpointTypeModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IEndpointTypeControllerCreateEndpointType,
  IEndpointTypeControllerCreateEndpointTypeOutputError,
  IEndpointTypeControllerCreateEndpointTypeOutputSuccess,
} from '@app-ae/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * endpointTypeControllerCreateEndpointType
 *
 * The entity API create endpointType controller.
 *
 * @param { IEndpointTypeControllerCreateEndpointTypeInput } params
 * @param { Types.ObjectId } params.endpointTypeId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IEndpointTypeControllerCreateEndpointTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { endpointTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const endpointTypeControllerCreateEndpointType: IEndpointTypeControllerCreateEndpointType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      const endpointTypeId = new Types.ObjectId();
      const modelParams = {
        endpointTypeId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      const endpointTypeModel = new EndpointTypeModel(modelParams);
      await endpointTypeModel.save();

      stat.error = false;
      stat.payload = { endpointTypeId };
      return stat as IEndpointTypeControllerCreateEndpointTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IEndpointTypeControllerCreateEndpointTypeOutputError;
    }
  };
