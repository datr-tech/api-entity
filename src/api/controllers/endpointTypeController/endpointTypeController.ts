import { endpointTypeControllerCreateEndpointType } from './endpointTypeControllerCreateEndpointType';
import { endpointTypeControllerUpdateEndpointType } from './endpointTypeControllerUpdateEndpointType';
import { endpointTypeControllerReadEndpointType } from './endpointTypeControllerReadEndpointType';
import { endpointTypeControllerDeleteEndpointType } from './endpointTypeControllerDeleteEndpointType';

export const endpointTypeController = {
  createEndpointType: endpointTypeControllerCreateEndpointType,
  updateEndpointType: endpointTypeControllerUpdateEndpointType,
  readEndpointType: endpointTypeControllerReadEndpointType,
  deleteEndpointType: endpointTypeControllerDeleteEndpointType,
};
