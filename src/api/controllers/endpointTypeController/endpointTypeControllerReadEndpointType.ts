import { EndpointTypeModel } from '@app/api/models';

export const endpointTypeControllerReadEndpointType = async ({ endpointTypeId }) => {
  const endpointType = await EndpointTypeModel.findById(endpointTypeId);

  return endpointType;
};
