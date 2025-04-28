import { frameworkControllerCreateFramework } from './frameworkControllerCreateFramework';
import { frameworkControllerDeleteFramework } from './frameworkControllerDeleteFramework';
import { frameworkControllerReadFramework } from './frameworkControllerReadFramework';
import { frameworkControllerUpdateFramework } from './frameworkControllerUpdateFramework';

export const frameworkController = {
  createFramework: frameworkControllerCreateFramework,
  updateFramework: frameworkControllerUpdateFramework,
  readFramework: frameworkControllerReadFramework,
  deleteFramework: frameworkControllerDeleteFramework,
};
