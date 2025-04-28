import { IServiceControllerUpdateServiceOutputError } from './IServiceControllerUpdateServiceOutputError';
import { IServiceControllerUpdateServiceOutputSuccess } from './IServiceControllerUpdateServiceOutputSuccess';

export type IServiceControllerUpdateServiceOutput =
  | IServiceControllerUpdateServiceOutputSuccess
  | IServiceControllerUpdateServiceOutputError;
