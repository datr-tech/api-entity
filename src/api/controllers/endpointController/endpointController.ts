import { endpointControllerCreateEndpoint } from './endpointControllerCreateEndpoint';
import { endpointControllerUpdateEndpoint } from './endpointControllerUpdateEndpoint';
import { endpointControllerReadEndpoint } from './endpointControllerReadEndpoint';
import { endpointControllerDeleteEndpoint } from './endpointControllerDeleteEndpoint';

export const endpointController = {
  createEndpoint: endpointControllerCreateEndpoint,
  updateEndpoint: endpointControllerUpdateEndpoint,
  readEndpoint: endpointControllerReadEndpoint,
  deleteEndpoint: endpointControllerDeleteEndpoint,
};
