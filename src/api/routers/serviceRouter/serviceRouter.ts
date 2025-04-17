import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { serviceRouterCreateService } from './serviceRouterCreateService';
import { serviceRouterDeleteService } from './serviceRouterDeleteService';
import { serviceRouterReadService } from './serviceRouterReadService';
import { serviceRouterUpdateService } from './serviceRouterUpdateService';

export const serviceRouter = Router(options)
  .use('/', serviceRouterCreateService)
  .use('/:serviceId', serviceRouterDeleteService)
  .use('/:serviceId', serviceRouterReadService)
  .use('/:serviceId', serviceRouterUpdateService);
