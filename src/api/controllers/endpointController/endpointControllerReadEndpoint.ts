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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { endpointModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const endpointControllerReadEndpoint: IEndpointControllerReadEndpoint = async ({
  endpointId,
}) => {
  const stat = { ...baseStat };

  try {
    const endpointModel = await EndpointModel.findById(endpointId);

    stat.error = false;
    stat.payload = { endpointModel };
    return stat as IEndpointControllerReadEndpointOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IEndpointControllerReadEndpointOutputError;
  }
};
