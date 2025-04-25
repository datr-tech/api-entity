import { EndpointTypeModel } from '@app-ae/api/models';
import { Types } from 'mongoose';

export const endpointTypeControllerCreateEndpointType = async ({
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const endpointTypeId = new Types.ObjectId();
  const modelParams = {
    endpointTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const endpointTypeModel = new EndpointTypeModel(modelParams);
  await endpointTypeModel.save();

  return endpointTypeModel._id;
};
