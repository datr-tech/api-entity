import { FrameworkModel } from '@app/api/models';

export const modelValidatorFrameworkId = async (doc, next) => {
  let framework;
  let frameworkId;

  if (doc && typeof doc.frameworkId !== 'undefined') {
    frameworkId = doc.frameworkId;
  }

  if (frameworkId) {
    framework = await FrameworkModel.findById(frameworkId);
  }

  if (!framework) {
    throw new Error('frameworkId: invalid');
  }

  next();
};
