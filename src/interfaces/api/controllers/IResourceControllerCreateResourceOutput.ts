import { IResourceControllerCreateResourceOutputError } from './IResourceControllerCreateResourceOutputError';
import { IResourceControllerCreateResourceOutputSuccess } from './IResourceControllerCreateResourceOutputSuccess';

export type IResourceControllerCreateResourceOutput =
  | IResourceControllerCreateResourceOutputSuccess
  | IResourceControllerCreateResourceOutputError;
