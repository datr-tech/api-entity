import { endpointControllerCreateEndpoint } from './endpointControllerCreateEndpoint';
import { endpointControllerDeleteEndpoint } from './endpointControllerDeleteEndpoint';
import { endpointControllerReadEndpoint } from './endpointControllerReadEndpoint';
import { endpointControllerUpdateEndpoint } from './endpointControllerUpdateEndpoint';

export const endpointController = {
  createEndpoint: endpointControllerCreateEndpoint,
  updateEndpoint: endpointControllerUpdateEndpoint,
  readEndpoint: endpointControllerReadEndpoint,
  deleteEndpoint: endpointControllerDeleteEndpoint,
};
