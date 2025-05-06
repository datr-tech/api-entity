import { IResourceModel } from '@app-ae/interfaces/api/models';

export interface IResourceControllerReadResourceOutputSuccess {
  error: false;
  payload: {
    resourceModel: IResourceModel;
    responseStatusCode: number;
  };
}
