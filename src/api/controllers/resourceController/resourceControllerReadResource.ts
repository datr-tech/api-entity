import { ResourceModel } from '@app/api/models';

export const resourceControllerReadResource = async ({ resourceId }) => {
  const resource = await ResourceModel.findById(resourceId);

  return resource;
};
