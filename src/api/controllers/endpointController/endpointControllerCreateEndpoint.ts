import { Types } from 'mongoose';
import { EndpointModel } from '@app/api/models';

export const endpointControllerCreateEndpoint = async ({ endpointTypeId, description, name, adminStatusId, adminUserId }) => {
  const endpointId = new Types.ObjectId();
  const modelParams = {
    endpointId,
    endpointTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const endpointModel = new EndpointModel(modelParams);
  await endpointModel.save();

  return endpointModel._id;
};
