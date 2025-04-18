import { FrameworkTypeModel } from '@app/api/models';
import { Types } from 'mongoose';

export const frameworkTypeControllerCreateFrameworkType = async ({
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const frameworkTypeId = new Types.ObjectId();
  const modelParams = {
    frameworkTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const frameworkTypeModel = new FrameworkTypeModel(modelParams);
  await frameworkTypeModel.save();

  return frameworkTypeModel._id;
};
