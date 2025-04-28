import { IServiceControllerCreateServiceOutputError } from './IServiceControllerCreateServiceOutputError';
import { IServiceControllerCreateServiceOutputSuccess } from './IServiceControllerCreateServiceOutputSuccess';

export type IServiceControllerCreateServiceOutput =
  | IServiceControllerCreateServiceOutputSuccess
  | IServiceControllerCreateServiceOutputError;
