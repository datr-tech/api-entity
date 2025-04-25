import { EndpointModel } from '@app-ae/api/models';
import { Types } from 'mongoose';

export const endpointControllerDeleteEndpoint = async ({ endpointId }) => {
  const res = await EndpointModel.findOneAndUpdate(
    {
      _id: endpointId,
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
