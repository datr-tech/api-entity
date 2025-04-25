import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { frameworkRouterCreateFramework } from './frameworkRouterCreateFramework';
import { frameworkRouterDeleteFramework } from './frameworkRouterDeleteFramework';
import { frameworkRouterReadFramework } from './frameworkRouterReadFramework';
import { frameworkRouterUpdateFramework } from './frameworkRouterUpdateFramework';

export const frameworkRouter = Router(options)
  .use('/:frameworkId', frameworkRouterDeleteFramework)
  .use('/:frameworkId', frameworkRouterReadFramework)
  .use('/:frameworkId', frameworkRouterUpdateFramework)
  .use('/', frameworkRouterCreateFramework);
