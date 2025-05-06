import { Types } from 'mongoose';

export interface IFrameworkTypeControllerCreateFrameworkTypeOutputSuccess {
  error: false;
  payload: {
    frameworkTypeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
