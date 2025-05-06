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
 * @param { number } params.updatedAt  (Optional)
 *
 * @returns { Promise<IEndpointControllerCreateEndpointOutput> }
 * @returns { Promise<IEndpointControllerCreateEndpointOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IEndpointControllerCreateEndpointOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { endpointModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
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
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
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

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'EndpointModel'.
       * 'db-entity'. Then save the created
       * model to the associated store: 'db-entity',
       */
      const endpointModel = new EndpointModel(modelParams);
      await endpointModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model's primary key.
       */
      stat.error = false;
      stat.payload = {
        endpointId,
        responseStatusCode: 201,
      };

      /*
       * Cast the response object to
       * 'IEndpointControllerCreateEndpointOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IEndpointControllerCreateEndpointOutput'.
       */
      return stat as IEndpointControllerCreateEndpointOutputSuccess;
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
       * Cast the response object to 'IEndpointControllerCreateEndpointOutputError',
       */
      return stat as IEndpointControllerCreateEndpointOutputError;
    }
  };
