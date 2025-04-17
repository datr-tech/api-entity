import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { resourceRouterCreateResource } from './resourceRouterCreateResource';
import { resourceRouterDeleteResource } from './resourceRouterDeleteResource';
import { resourceRouterReadResource } from './resourceRouterReadResource';
import { resourceRouterUpdateResource } from './resourceRouterUpdateResource';

export const resourceRouter = Router(options)
  .use('/', resourceRouterCreateResource)
  .use('/:resourceId', resourceRouterDeleteResource)
  .use('/:resourceId', resourceRouterReadResource)
  .use('/:resourceId', resourceRouterUpdateResource);
