import { IEndpointControllerReadEndpointOutputError } from './IEndpointControllerReadEndpointOutputError';
import { IEndpointControllerReadEndpointOutputSuccess } from './IEndpointControllerReadEndpointOutputSuccess';

export type IEndpointControllerReadEndpointOutput =
  | IEndpointControllerReadEndpointOutputSuccess
  | IEndpointControllerReadEndpointOutputError;
