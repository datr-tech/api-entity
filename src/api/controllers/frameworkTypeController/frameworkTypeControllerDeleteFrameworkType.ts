import { Types } from 'mongoose';
import { FrameworkTypeModel } from '@app/api/models';

export const frameworkTypeControllerDeleteFrameworkType = async ({ frameworkTypeId }) => {
  const res = await FrameworkTypeModel.findOneAndUpdate(
    {
      _id: frameworkTypeId,
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
