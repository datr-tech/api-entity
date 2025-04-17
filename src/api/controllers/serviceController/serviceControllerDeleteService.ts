import { Types } from 'mongoose';
import { ServiceModel } from '@app/api/models';

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
