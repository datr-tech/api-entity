import { Types } from 'mongoose';
import { ServiceModel } from '@app/api/models';

export const serviceControllerCreateService = async ({ frameworkId, description, name, adminStatusId, adminUserId }) => {
  const serviceId = new Types.ObjectId();
  const modelParams = {
    serviceId,
    frameworkId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const serviceModel = new ServiceModel(modelParams);
  await serviceModel.save();

  return serviceModel._id;
};
