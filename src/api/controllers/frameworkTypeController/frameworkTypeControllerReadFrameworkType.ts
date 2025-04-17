import { FrameworkTypeModel } from '@app/api/models';

export const frameworkTypeControllerReadFrameworkType = async ({ frameworkTypeId }) => {
  const frameworkType = await FrameworkTypeModel.findById(frameworkTypeId);

  return frameworkType;
};
