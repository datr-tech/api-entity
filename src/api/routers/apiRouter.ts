import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { endpointRouter } from './endpointRouter';
import { endpointTypeRouter } from './endpointTypeRouter';
import { frameworkRouter } from './frameworkRouter';
import { frameworkTypeRouter } from './frameworkTypeRouter';
import { resourceRouter } from './resourceRouter';
import { resourceTypeRouter } from './resourceTypeRouter';
import { serviceRouter } from './serviceRouter';

export const apiRouter = Router(options)
  .use('/api/v1/endpoint', endpointRouter)
  .use('/api/v1/endpointType', endpointTypeRouter)
  .use('/api/v1/framework', frameworkRouter)
  .use('/api/v1/frameworkType', frameworkTypeRouter)
  .use('/api/v1/resource', resourceRouter)
  .use('/api/v1/resourceType', resourceTypeRouter)
  .use('/api/v1/service', serviceRouter);
