import { ResourceTypeModel } from '@app/api/models';

export const resourceTypeControllerReadResourceType = async ({ resourceTypeId }) => {
  const resourceType = await ResourceTypeModel.findById(resourceTypeId);

  return resourceType;
};
