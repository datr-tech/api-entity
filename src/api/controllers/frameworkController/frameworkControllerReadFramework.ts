import { FrameworkModel } from '@app-ae/api/models';

export const frameworkControllerReadFramework = async ({ frameworkId }) => {
  const framework = await FrameworkModel.findById(frameworkId);

  return framework;
};
