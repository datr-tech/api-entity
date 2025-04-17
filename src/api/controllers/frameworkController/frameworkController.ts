import { frameworkControllerCreateFramework } from './frameworkControllerCreateFramework';
import { frameworkControllerUpdateFramework } from './frameworkControllerUpdateFramework';
import { frameworkControllerReadFramework } from './frameworkControllerReadFramework';
import { frameworkControllerDeleteFramework } from './frameworkControllerDeleteFramework';

export const frameworkController = {
  createFramework: frameworkControllerCreateFramework,
  updateFramework: frameworkControllerUpdateFramework,
  readFramework: frameworkControllerReadFramework,
  deleteFramework: frameworkControllerDeleteFramework,
};
