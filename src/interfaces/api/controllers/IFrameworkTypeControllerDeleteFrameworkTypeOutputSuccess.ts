import { Types } from 'mongoose';

export interface IFrameworkTypeControllerDeleteFrameworkTypeOutputSuccess {
  error: false;
  payload: {
    frameworkTypeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
