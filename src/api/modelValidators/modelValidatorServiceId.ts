import { ServiceModel } from '@app/api/models';

export const modelValidatorServiceId = async (doc, next) => {
  let service;
  let serviceId;

  if (doc && typeof doc.serviceId !== 'undefined') {
    serviceId = doc.serviceId;
  }

  if (serviceId) {
    service = await ServiceModel.findById(serviceId);
  }

  if (!service) {
    throw new Error('serviceId: invalid');
  }

  next();
};
