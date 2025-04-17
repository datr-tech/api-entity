import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { frameworkTypeRouterCreateFrameworkType } from './frameworkTypeRouterCreateFrameworkType';
import { frameworkTypeRouterDeleteFrameworkType } from './frameworkTypeRouterDeleteFrameworkType';
import { frameworkTypeRouterReadFrameworkType } from './frameworkTypeRouterReadFrameworkType';
import { frameworkTypeRouterUpdateFrameworkType } from './frameworkTypeRouterUpdateFrameworkType';

export const frameworkTypeRouter = Router(options)
  .use('/', frameworkTypeRouterCreateFrameworkType)
  .use('/:frameworkTypeId', frameworkTypeRouterDeleteFrameworkType)
  .use('/:frameworkTypeId', frameworkTypeRouterReadFrameworkType)
  .use('/:frameworkTypeId', frameworkTypeRouterUpdateFrameworkType);
