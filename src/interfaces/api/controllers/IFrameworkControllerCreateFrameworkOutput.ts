import { IFrameworkControllerCreateFrameworkOutputError } from './IFrameworkControllerCreateFrameworkOutputError';
import { IFrameworkControllerCreateFrameworkOutputSuccess } from './IFrameworkControllerCreateFrameworkOutputSuccess';

export type IFrameworkControllerCreateFrameworkOutput =
  | IFrameworkControllerCreateFrameworkOutputSuccess
  | IFrameworkControllerCreateFrameworkOutputError;
