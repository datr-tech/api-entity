import { ResourceTypeModel } from '@app-ae/api/models';
import { Types } from 'mongoose';

export const resourceTypeControllerDeleteResourceType = async ({ resourceTypeId }) => {
  const res = await ResourceTypeModel.findOneAndUpdate(
    {
      _id: resourceTypeId,
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
