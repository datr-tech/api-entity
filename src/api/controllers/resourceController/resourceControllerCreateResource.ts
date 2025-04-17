import { Types } from 'mongoose';
import { ResourceModel } from '@app/api/models';

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
