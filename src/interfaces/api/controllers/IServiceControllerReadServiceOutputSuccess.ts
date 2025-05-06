import { IServiceModel } from '@app-ae/interfaces/api/models';

export interface IServiceControllerReadServiceOutputSuccess {
  error: false;
  payload: {
    serviceModel: IServiceModel;
    responseStatusCode: number;
  };
}
