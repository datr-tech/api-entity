import { FrameworkTypeModel } from '@app/api/models';
import { Types } from 'mongoose';

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
