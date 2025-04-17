import { Types } from 'mongoose';
import { FrameworkModel } from '@app/api/models';

export const frameworkControllerDeleteFramework = async ({ frameworkId }) => {
  const res = await FrameworkModel.findOneAndUpdate(
    {
      _id: frameworkId,
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
