import { endpointTypeControllerCreateEndpointType } from './endpointTypeControllerCreateEndpointType';
import { endpointTypeControllerDeleteEndpointType } from './endpointTypeControllerDeleteEndpointType';
import { endpointTypeControllerReadEndpointType } from './endpointTypeControllerReadEndpointType';
import { endpointTypeControllerUpdateEndpointType } from './endpointTypeControllerUpdateEndpointType';

export const endpointTypeController = {
  createEndpointType: endpointTypeControllerCreateEndpointType,
  updateEndpointType: endpointTypeControllerUpdateEndpointType,
  readEndpointType: endpointTypeControllerReadEndpointType,
  deleteEndpointType: endpointTypeControllerDeleteEndpointType,
};
