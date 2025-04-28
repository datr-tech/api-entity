import { IResourceControllerReadResourceOutputError } from './IResourceControllerReadResourceOutputError';
import { IResourceControllerReadResourceOutputSuccess } from './IResourceControllerReadResourceOutputSuccess';

export type IResourceControllerReadResourceOutput =
  | IResourceControllerReadResourceOutputSuccess
  | IResourceControllerReadResourceOutputError;
