import { IResourceControllerUpdateResourceOutputError } from './IResourceControllerUpdateResourceOutputError';
import { IResourceControllerUpdateResourceOutputSuccess } from './IResourceControllerUpdateResourceOutputSuccess';

export type IResourceControllerUpdateResourceOutput =
  | IResourceControllerUpdateResourceOutputSuccess
  | IResourceControllerUpdateResourceOutputError;
