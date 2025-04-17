import { Types } from 'mongoose';
import { EndpointModel } from '@app/api/models';

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
