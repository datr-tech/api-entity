import { Types } from 'mongoose';
import { ResourceTypeModel } from '@app/api/models';

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
