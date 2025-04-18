import { frameworkTypeControllerCreateFrameworkType } from './frameworkTypeControllerCreateFrameworkType';
import { frameworkTypeControllerDeleteFrameworkType } from './frameworkTypeControllerDeleteFrameworkType';
import { frameworkTypeControllerReadFrameworkType } from './frameworkTypeControllerReadFrameworkType';
import { frameworkTypeControllerUpdateFrameworkType } from './frameworkTypeControllerUpdateFrameworkType';

export const frameworkTypeController = {
  createFrameworkType: frameworkTypeControllerCreateFrameworkType,
  updateFrameworkType: frameworkTypeControllerUpdateFrameworkType,
  readFrameworkType: frameworkTypeControllerReadFrameworkType,
  deleteFrameworkType: frameworkTypeControllerDeleteFrameworkType,
};
