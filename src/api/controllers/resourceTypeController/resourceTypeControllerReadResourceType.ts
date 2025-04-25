import { ResourceTypeModel } from '@app-ae/api/models';

export const resourceTypeControllerReadResourceType = async ({ resourceTypeId }) => {
  const resourceType = await ResourceTypeModel.findById(resourceTypeId);

  return resourceType;
};
