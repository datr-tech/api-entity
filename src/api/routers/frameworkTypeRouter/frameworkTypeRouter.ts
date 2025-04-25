import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { frameworkTypeRouterCreateFrameworkType } from './frameworkTypeRouterCreateFrameworkType';
import { frameworkTypeRouterDeleteFrameworkType } from './frameworkTypeRouterDeleteFrameworkType';
import { frameworkTypeRouterReadFrameworkType } from './frameworkTypeRouterReadFrameworkType';
import { frameworkTypeRouterUpdateFrameworkType } from './frameworkTypeRouterUpdateFrameworkType';

export const frameworkTypeRouter = Router(options)
  .use('/:frameworkTypeId', frameworkTypeRouterDeleteFrameworkType)
  .use('/:frameworkTypeId', frameworkTypeRouterReadFrameworkType)
  .use('/:frameworkTypeId', frameworkTypeRouterUpdateFrameworkType)
  .use('/', frameworkTypeRouterCreateFrameworkType);
