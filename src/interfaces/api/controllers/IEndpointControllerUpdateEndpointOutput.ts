import { IEndpointControllerUpdateEndpointOutputError } from './IEndpointControllerUpdateEndpointOutputError';
import { IEndpointControllerUpdateEndpointOutputSuccess } from './IEndpointControllerUpdateEndpointOutputSuccess';

export type IEndpointControllerUpdateEndpointOutput =
  | IEndpointControllerUpdateEndpointOutputSuccess
  | IEndpointControllerUpdateEndpointOutputError;
