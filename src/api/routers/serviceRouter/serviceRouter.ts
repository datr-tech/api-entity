import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { serviceRouterCreateService } from './serviceRouterCreateService';
import { serviceRouterDeleteService } from './serviceRouterDeleteService';
import { serviceRouterReadService } from './serviceRouterReadService';
import { serviceRouterUpdateService } from './serviceRouterUpdateService';

export const serviceRouter = Router(options)
  .use('/:serviceId', serviceRouterDeleteService)
  .use('/:serviceId', serviceRouterReadService)
  .use('/:serviceId', serviceRouterUpdateService)
  .use('/', serviceRouterCreateService);
