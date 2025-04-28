import { EndpointModel } from '@app-ae/api/models';
import { baseStat } from '@app-ae/api/util/baseStat';
import {
  IEndpointControllerReadEndpoint,
  IEndpointControllerReadEndpointOutputError,
  IEndpointControllerReadEndpointOutputSuccess,
} from '@app-ae/interfaces/api/controllers';

/**
 * endpointControllerReadEndpoint
 *
 * The entity API read endpoint controller.
 *
 * @param { IEndpointControllerReadEndpointInput } params
 * @param { Types.ObjectId } params.endpointId
 *
 * @returns { Promise<IEndpointControllerReadEndpointOutput> }
 * @returns { Promise<IEndpointControllerReadEndpointOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IEndpointControllerReadEndpointOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { endpointModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const endpointControllerReadEndpoint: IEndpointControllerReadEndpoint = async ({
  endpointId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'EndpointModel'
     * using the received 'endpointId' param.
     */
    const endpointModel = await EndpointModel.findById(endpointId);

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = { endpointModel };

    /*
     * Cast the response object to
     * 'IEndpointControllerReadEndpointOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IEndpointControllerReadEndpointOutput'.
     */
    return stat as IEndpointControllerReadEndpointOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IEndpointControllerReadEndpointOutputError',
     */
    return stat as IEndpointControllerReadEndpointOutputError;
  }
};
