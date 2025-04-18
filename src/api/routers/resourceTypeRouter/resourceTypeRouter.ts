import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { resourceTypeRouterCreateResourceType } from './resourceTypeRouterCreateResourceType';
import { resourceTypeRouterDeleteResourceType } from './resourceTypeRouterDeleteResourceType';
import { resourceTypeRouterReadResourceType } from './resourceTypeRouterReadResourceType';
import { resourceTypeRouterUpdateResourceType } from './resourceTypeRouterUpdateResourceType';

export const resourceTypeRouter = Router(options)
  .use('/', resourceTypeRouterCreateResourceType)
  .use('/:resourceTypeId', resourceTypeRouterDeleteResourceType)
  .use('/:resourceTypeId', resourceTypeRouterReadResourceType)
  .use('/:resourceTypeId', resourceTypeRouterUpdateResourceType);
