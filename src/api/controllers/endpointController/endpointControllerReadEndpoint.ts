import { EndpointModel } from '@app/api/models';

export const endpointControllerReadEndpoint = async ({ endpointId }) => {
  const endpoint = await EndpointModel.findById(endpointId);

  return endpoint;
};
