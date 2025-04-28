import { IEndpointTypeControllerReadEndpointTypeOutputError } from './IEndpointTypeControllerReadEndpointTypeOutputError';
import { IEndpointTypeControllerReadEndpointTypeOutputSuccess } from './IEndpointTypeControllerReadEndpointTypeOutputSuccess';

export type IEndpointTypeControllerReadEndpointTypeOutput =
  | IEndpointTypeControllerReadEndpointTypeOutputSuccess
  | IEndpointTypeControllerReadEndpointTypeOutputError;
