import { FrameworkTypeModel } from '@app-ae/api/models';

export const frameworkTypeControllerReadFrameworkType = async ({ frameworkTypeId }) => {
  const frameworkType = await FrameworkTypeModel.findById(frameworkTypeId);

  return frameworkType;
};
