import { ResourceTypeModel } from '@app-ae/api/models';

export const modelValidatorResourceTypeId = async (doc, next) => {
  let resourceType;
  let resourceTypeId;

  if (doc && typeof doc.resourceTypeId !== 'undefined') {
    resourceTypeId = doc.resourceTypeId;
  }

  if (resourceTypeId) {
    resourceType = await ResourceTypeModel.findById(resourceTypeId);
  }

  if (!resourceType) {
    throw new Error('resourceTypeId: invalid');
  }

  next();
};
