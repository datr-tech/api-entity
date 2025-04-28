import { IEndpointModel } from '@app-ae/interfaces/api/models';

export interface IEndpointControllerReadEndpointOutputSuccess {
  error: false;
  payload: {
    endpointModel: IEndpointModel;
  };
}
