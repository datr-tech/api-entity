import { IServiceControllerReadServiceOutputError } from './IServiceControllerReadServiceOutputError';
import { IServiceControllerReadServiceOutputSuccess } from './IServiceControllerReadServiceOutputSuccess';

export type IServiceControllerReadServiceOutput =
  | IServiceControllerReadServiceOutputSuccess
  | IServiceControllerReadServiceOutputError;
