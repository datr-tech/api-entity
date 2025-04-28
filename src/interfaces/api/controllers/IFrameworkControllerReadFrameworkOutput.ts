import { IFrameworkControllerReadFrameworkOutputError } from './IFrameworkControllerReadFrameworkOutputError';
import { IFrameworkControllerReadFrameworkOutputSuccess } from './IFrameworkControllerReadFrameworkOutputSuccess';

export type IFrameworkControllerReadFrameworkOutput =
  | IFrameworkControllerReadFrameworkOutputSuccess
  | IFrameworkControllerReadFrameworkOutputError;
