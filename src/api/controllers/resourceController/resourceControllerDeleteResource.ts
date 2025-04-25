import { ResourceModel } from '@app-ae/api/models';
import { Types } from 'mongoose';

export const resourceControllerDeleteResource = async ({ resourceId }) => {
  const res = await ResourceModel.findOneAndUpdate(
    {
      _id: resourceId,
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
