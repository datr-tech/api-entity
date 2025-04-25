import { ServiceModel } from '@app-ae/api/models';
import { Types } from 'mongoose';

export const serviceControllerCreateService = async ({
  frameworkId,
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
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
