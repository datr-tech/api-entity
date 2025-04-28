import { IResourceTypeModel } from '@app-ae/interfaces/api/models';

export interface IResourceTypeControllerReadResourceTypeOutputSuccess {
  error: false;
  payload: {
    resourceTypeModel: IResourceTypeModel;
  };
}
