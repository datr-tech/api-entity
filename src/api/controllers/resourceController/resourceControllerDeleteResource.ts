import { Types } from 'mongoose';
import { ResourceModel } from '@app/api/models';

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
