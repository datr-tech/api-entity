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
 * @param { number } params.updatedAt  (Optional)
 *
 * @returns { Promise<IEndpointTypeControllerCreateEndpointTypeOutput> }
 * @returns { Promise<IEndpointTypeControllerCreateEndpointTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IEndpointTypeControllerCreateEndpointTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { endpointTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const endpointTypeControllerCreateEndpointType: IEndpointTypeControllerCreateEndpointType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
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

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'EndpointTypeModel'.
       * 'db-entity'. Then save the created
       * model to the associated store: 'db-entity',
       */
      const endpointTypeModel = new EndpointTypeModel(modelParams);
      await endpointTypeModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model's primary key.
       */
      stat.error = false;
      stat.payload = {
        endpointTypeId,
        responseStatusCode: 201,
      };

      /*
       * Cast the response object to
       * 'IEndpointTypeControllerCreateEndpointTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IEndpointTypeControllerCreateEndpointTypeOutput'.
       */
      return stat as IEndpointTypeControllerCreateEndpointTypeOutputSuccess;
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
       * Cast the response object to 'IEndpointTypeControllerCreateEndpointTypeOutputError',
       */
      return stat as IEndpointTypeControllerCreateEndpointTypeOutputError;
    }
  };
