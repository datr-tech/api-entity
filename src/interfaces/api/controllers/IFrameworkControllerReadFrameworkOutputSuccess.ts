import { IFrameworkModel } from '@app-ae/interfaces/api/models';

export interface IFrameworkControllerReadFrameworkOutputSuccess {
  error: false;
  payload: {
    frameworkModel: IFrameworkModel;
    responseStatusCode: number;
  };
}
