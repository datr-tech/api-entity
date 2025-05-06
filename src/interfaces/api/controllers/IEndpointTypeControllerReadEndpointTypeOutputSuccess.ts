import { IEndpointTypeModel } from '@app-ae/interfaces/api/models';

export interface IEndpointTypeControllerReadEndpointTypeOutputSuccess {
  error: false;
  payload: {
    endpointTypeModel: IEndpointTypeModel;
    responseStatusCode: number;
  };
}
