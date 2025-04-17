import { Types } from 'mongoose';
import { ResourceTypeModel } from '@app/api/models';

export const resourceTypeControllerCreateResourceType = async ({ description, name, adminStatusId, adminUserId }) => {
  const resourceTypeId = new Types.ObjectId();
  const modelParams = {
    resourceTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const resourceTypeModel = new ResourceTypeModel(modelParams);
  await resourceTypeModel.save();

  return resourceTypeModel._id;
};
