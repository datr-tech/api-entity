import { IFrameworkControllerUpdateFrameworkOutputError } from './IFrameworkControllerUpdateFrameworkOutputError';
import { IFrameworkControllerUpdateFrameworkOutputSuccess } from './IFrameworkControllerUpdateFrameworkOutputSuccess';

export type IFrameworkControllerUpdateFrameworkOutput =
  | IFrameworkControllerUpdateFrameworkOutputSuccess
  | IFrameworkControllerUpdateFrameworkOutputError;
