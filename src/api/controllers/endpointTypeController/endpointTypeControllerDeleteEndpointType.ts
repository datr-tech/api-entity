import { Types } from 'mongoose';
import { EndpointTypeModel } from '@app/api/models';

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
