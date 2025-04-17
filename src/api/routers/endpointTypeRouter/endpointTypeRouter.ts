import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { endpointTypeRouterCreateEndpointType } from './endpointTypeRouterCreateEndpointType';
import { endpointTypeRouterDeleteEndpointType } from './endpointTypeRouterDeleteEndpointType';
import { endpointTypeRouterReadEndpointType } from './endpointTypeRouterReadEndpointType';
import { endpointTypeRouterUpdateEndpointType } from './endpointTypeRouterUpdateEndpointType';

export const endpointTypeRouter = Router(options)
  .use('/', endpointTypeRouterCreateEndpointType)
  .use('/:endpointTypeId', endpointTypeRouterDeleteEndpointType)
  .use('/:endpointTypeId', endpointTypeRouterReadEndpointType)
  .use('/:endpointTypeId', endpointTypeRouterUpdateEndpointType);
