import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { frameworkRouterCreateFramework } from './frameworkRouterCreateFramework';
import { frameworkRouterDeleteFramework } from './frameworkRouterDeleteFramework';
import { frameworkRouterReadFramework } from './frameworkRouterReadFramework';
import { frameworkRouterUpdateFramework } from './frameworkRouterUpdateFramework';

export const frameworkRouter = Router(options)
  .use('/', frameworkRouterCreateFramework)
  .use('/:frameworkId', frameworkRouterDeleteFramework)
  .use('/:frameworkId', frameworkRouterReadFramework)
  .use('/:frameworkId', frameworkRouterUpdateFramework);
