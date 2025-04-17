import { FrameworkTypeModel } from '@app/api/models';

export const modelValidatorFrameworkTypeId = async (doc, next) => {
  let frameworkType;
  let frameworkTypeId;

  if (doc && typeof doc.frameworkTypeId !== 'undefined') {
    frameworkTypeId = doc.frameworkTypeId;
  }

  if (frameworkTypeId) {
    frameworkType = await FrameworkTypeModel.findById(frameworkTypeId);
  }

  if (!frameworkType) {
    throw new Error('frameworkTypeId: invalid');
  }

  next();
};
