import { EndpointModel } from '@app-ae/api/models';

export const endpointControllerReadEndpoint = async ({ endpointId }) => {
  const endpoint = await EndpointModel.findById(endpointId);

  return endpoint;
};
