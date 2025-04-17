import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { endpointRouter } from './endpointRouter';
import { endpointTypeRouter } from './endpointTypeRouter';
import { frameworkRouter } from './frameworkRouter';
import { frameworkTypeRouter } from './frameworkTypeRouter';
import { resourceRouter } from './resourceRouter';
import { resourceTypeRouter } from './resourceTypeRouter';
import { serviceRouter } from './serviceRouter';

export const apiRouter = Router(options)
  .use('/api/v1/endpointRouter', endpointRouter)
  .use('/api/v1/endpointTypeRouter', endpointTypeRouter)
  .use('/api/v1/frameworkRouter', frameworkRouter)
  .use('/api/v1/frameworkTypeRouter', frameworkTypeRouter)
  .use('/api/v1/resourceRouter', resourceRouter)
  .use('/api/v1/resourceTypeRouter', resourceTypeRouter)
  .use('/api/v1/serviceRouter', serviceRouter);
