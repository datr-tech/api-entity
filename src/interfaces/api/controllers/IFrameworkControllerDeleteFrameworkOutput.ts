import { IFrameworkControllerDeleteFrameworkOutputError } from './IFrameworkControllerDeleteFrameworkOutputError';
import { IFrameworkControllerDeleteFrameworkOutputSuccess } from './IFrameworkControllerDeleteFrameworkOutputSuccess';

export type IFrameworkControllerDeleteFrameworkOutput =
  | IFrameworkControllerDeleteFrameworkOutputSuccess
  | IFrameworkControllerDeleteFrameworkOutputError;
