import { resourceControllerCreateResource } from './resourceControllerCreateResource';
import { resourceControllerUpdateResource } from './resourceControllerUpdateResource';
import { resourceControllerReadResource } from './resourceControllerReadResource';
import { resourceControllerDeleteResource } from './resourceControllerDeleteResource';

export const resourceController = {
  createResource: resourceControllerCreateResource,
  updateResource: resourceControllerUpdateResource,
  readResource: resourceControllerReadResource,
  deleteResource: resourceControllerDeleteResource,
};
