import { resourceControllerCreateResource } from './resourceControllerCreateResource';
import { resourceControllerDeleteResource } from './resourceControllerDeleteResource';
import { resourceControllerReadResource } from './resourceControllerReadResource';
import { resourceControllerUpdateResource } from './resourceControllerUpdateResource';

export const resourceController = {
  createResource: resourceControllerCreateResource,
  updateResource: resourceControllerUpdateResource,
  readResource: resourceControllerReadResource,
  deleteResource: resourceControllerDeleteResource,
};
