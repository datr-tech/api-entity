import { EndpointTypeModel } from '@app/api/models';
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
