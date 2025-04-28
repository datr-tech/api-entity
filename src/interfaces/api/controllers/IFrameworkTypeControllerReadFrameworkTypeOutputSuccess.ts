import { IFrameworkTypeModel } from '@app-ae/interfaces/api/models';

export interface IFrameworkTypeControllerReadFrameworkTypeOutputSuccess {
  error: false;
  payload: {
    frameworkTypeModel: IFrameworkTypeModel;
  };
}
