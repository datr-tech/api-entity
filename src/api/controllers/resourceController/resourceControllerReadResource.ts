import { ResourceModel } from '@app-ae/api/models';

export const resourceControllerReadResource = async ({ resourceId }) => {
  const resource = await ResourceModel.findById(resourceId);

  return resource;
};
