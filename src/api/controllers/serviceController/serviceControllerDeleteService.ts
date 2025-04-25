import { ServiceModel } from '@app-ae/api/models';
import { Types } from 'mongoose';

export const serviceControllerDeleteService = async ({ serviceId }) => {
  const res = await ServiceModel.findOneAndUpdate(
    {
      _id: serviceId,
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
