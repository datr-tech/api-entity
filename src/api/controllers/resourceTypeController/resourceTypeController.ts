import { resourceTypeControllerCreateResourceType } from './resourceTypeControllerCreateResourceType';
import { resourceTypeControllerUpdateResourceType } from './resourceTypeControllerUpdateResourceType';
import { resourceTypeControllerReadResourceType } from './resourceTypeControllerReadResourceType';
import { resourceTypeControllerDeleteResourceType } from './resourceTypeControllerDeleteResourceType';

export const resourceTypeController = {
  createResourceType: resourceTypeControllerCreateResourceType,
  updateResourceType: resourceTypeControllerUpdateResourceType,
  readResourceType: resourceTypeControllerReadResourceType,
  deleteResourceType: resourceTypeControllerDeleteResourceType,
};
