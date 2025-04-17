import { Types } from 'mongoose';
import { FrameworkModel } from '@app/api/models';

export const frameworkControllerCreateFramework = async ({ frameworkTypeId, description, name, adminStatusId, adminUserId }) => {
  const frameworkId = new Types.ObjectId();
  const modelParams = {
    frameworkId,
    frameworkTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const frameworkModel = new FrameworkModel(modelParams);
  await frameworkModel.save();

  return frameworkModel._id;
};
