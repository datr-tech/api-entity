import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { endpointRouterCreateEndpoint } from './endpointRouterCreateEndpoint';
import { endpointRouterDeleteEndpoint } from './endpointRouterDeleteEndpoint';
import { endpointRouterReadEndpoint } from './endpointRouterReadEndpoint';
import { endpointRouterUpdateEndpoint } from './endpointRouterUpdateEndpoint';

export const endpointRouter = Router(options)
  .use('/', endpointRouterCreateEndpoint)
  .use('/:endpointId', endpointRouterDeleteEndpoint)
  .use('/:endpointId', endpointRouterReadEndpoint)
  .use('/:endpointId', endpointRouterUpdateEndpoint);
