import { IServiceControllerDeleteServiceOutputError } from './IServiceControllerDeleteServiceOutputError';
import { IServiceControllerDeleteServiceOutputSuccess } from './IServiceControllerDeleteServiceOutputSuccess';

export type IServiceControllerDeleteServiceOutput =
  | IServiceControllerDeleteServiceOutputSuccess
  | IServiceControllerDeleteServiceOutputError;
