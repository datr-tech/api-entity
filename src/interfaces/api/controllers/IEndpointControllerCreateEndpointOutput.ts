import { IEndpointControllerCreateEndpointOutputError } from './IEndpointControllerCreateEndpointOutputError';
import { IEndpointControllerCreateEndpointOutputSuccess } from './IEndpointControllerCreateEndpointOutputSuccess';

export type IEndpointControllerCreateEndpointOutput =
  | IEndpointControllerCreateEndpointOutputSuccess
  | IEndpointControllerCreateEndpointOutputError;
