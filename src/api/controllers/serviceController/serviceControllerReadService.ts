import { ServiceModel } from '@app-ae/api/models';

export const serviceControllerReadService = async ({ serviceId }) => {
  const service = await ServiceModel.findById(serviceId);

  return service;
};
