import { ResourceModel } from '@app-ae/api/models';
import { Types } from 'mongoose';

export const resourceControllerCreateResource = async ({
  endpointId,
  resourceTypeId,
  serviceId,
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const resourceId = new Types.ObjectId();
  const modelParams = {
    resourceId,
    endpointId,
    resourceTypeId,
    serviceId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const resourceModel = new ResourceModel(modelParams);
  await resourceModel.save();

  return resourceModel._id;
};
