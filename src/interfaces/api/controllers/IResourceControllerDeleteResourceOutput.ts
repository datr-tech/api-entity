import { IResourceControllerDeleteResourceOutputError } from './IResourceControllerDeleteResourceOutputError';
import { IResourceControllerDeleteResourceOutputSuccess } from './IResourceControllerDeleteResourceOutputSuccess';

export type IResourceControllerDeleteResourceOutput =
  | IResourceControllerDeleteResourceOutputSuccess
  | IResourceControllerDeleteResourceOutputError;
