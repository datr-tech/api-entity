import { resourceTypeControllerCreateResourceType } from './resourceTypeControllerCreateResourceType';
import { resourceTypeControllerDeleteResourceType } from './resourceTypeControllerDeleteResourceType';
import { resourceTypeControllerReadResourceType } from './resourceTypeControllerReadResourceType';
import { resourceTypeControllerUpdateResourceType } from './resourceTypeControllerUpdateResourceType';

export const resourceTypeController = {
  createResourceType: resourceTypeControllerCreateResourceType,
  updateResourceType: resourceTypeControllerUpdateResourceType,
  readResourceType: resourceTypeControllerReadResourceType,
  deleteResourceType: resourceTypeControllerDeleteResourceType,
};
