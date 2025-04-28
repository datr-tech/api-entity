import { IResourceTypeControllerReadResourceTypeOutputError } from './IResourceTypeControllerReadResourceTypeOutputError';
import { IResourceTypeControllerReadResourceTypeOutputSuccess } from './IResourceTypeControllerReadResourceTypeOutputSuccess';

export type IResourceTypeControllerReadResourceTypeOutput =
  | IResourceTypeControllerReadResourceTypeOutputSuccess
  | IResourceTypeControllerReadResourceTypeOutputError;
