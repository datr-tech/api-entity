import { FrameworkModel } from '@app/api/models';

export const frameworkControllerReadFramework = async ({ frameworkId }) => {
  const framework = await FrameworkModel.findById(frameworkId);

  return framework;
};
