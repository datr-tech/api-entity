import { ResourceModel } from '@app/api/models';

export const modelValidatorResourceId = async (doc, next) => {
  let resource;
  let resourceId;

  if (doc && typeof doc.resourceId !== 'undefined') {
    resourceId = doc.resourceId;
  }

  if (resourceId) {
    resource = await ResourceModel.findById(resourceId);
  }

  if (!resource) {
    throw new Error('resourceId: invalid');
  }

  next();
};
