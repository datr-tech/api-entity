import { IFrameworkTypeControllerDeleteFrameworkTypeOutputError } from './IFrameworkTypeControllerDeleteFrameworkTypeOutputError';
import { IFrameworkTypeControllerDeleteFrameworkTypeOutputSuccess } from './IFrameworkTypeControllerDeleteFrameworkTypeOutputSuccess';

export type IFrameworkTypeControllerDeleteFrameworkTypeOutput =
  | IFrameworkTypeControllerDeleteFrameworkTypeOutputSuccess
  | IFrameworkTypeControllerDeleteFrameworkTypeOutputError;
