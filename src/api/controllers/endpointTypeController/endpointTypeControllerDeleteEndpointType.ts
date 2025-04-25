import { EndpointTypeModel } from '@app-ae/api/models';
import { Types } from 'mongoose';

export const endpointTypeControllerDeleteEndpointType = async ({ endpointTypeId }) => {
  const res = await EndpointTypeModel.findOneAndUpdate(
    {
      _id: endpointTypeId,
    },
    {
      adminStatusId: new Types.ObjectId(),
    },
    {
      includeResultMetadata: true,
    },
  );

  return res;
};
