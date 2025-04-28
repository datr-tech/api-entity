import { IEndpointControllerDeleteEndpointOutputError } from './IEndpointControllerDeleteEndpointOutputError';
import { IEndpointControllerDeleteEndpointOutputSuccess } from './IEndpointControllerDeleteEndpointOutputSuccess';

export type IEndpointControllerDeleteEndpointOutput =
  | IEndpointControllerDeleteEndpointOutputSuccess
  | IEndpointControllerDeleteEndpointOutputError;
