import { FrameworkModel } from '@app-ae/api/models';
import { Types } from 'mongoose';

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
