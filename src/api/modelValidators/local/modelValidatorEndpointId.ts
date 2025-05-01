import { EndpointModel } from '@app-ae/api/models';

export const modelValidatorEndpointId = async (doc, next) => {
  let endpoint;
  let endpointId;

  if (doc && typeof doc.endpointId !== 'undefined') {
    endpointId = doc.endpointId;
  }

  if (endpointId) {
    endpoint = await EndpointModel.findById(endpointId);
  }

  if (!endpoint) {
    throw new Error('endpointId: invalid');
  }

  next();
};
