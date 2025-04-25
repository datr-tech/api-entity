import { EndpointTypeModel } from '@app-ae/api/models';

export const modelValidatorEndpointTypeId = async (doc, next) => {
  let endpointType;
  let endpointTypeId;

  if (doc && typeof doc.endpointTypeId !== 'undefined') {
    endpointTypeId = doc.endpointTypeId;
  }

  if (endpointTypeId) {
    endpointType = await EndpointTypeModel.findById(endpointTypeId);
  }

  if (!endpointType) {
    throw new Error('endpointTypeId: invalid');
  }

  next();
};
