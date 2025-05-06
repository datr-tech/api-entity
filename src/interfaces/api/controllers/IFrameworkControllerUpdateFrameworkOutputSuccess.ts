import { Types } from 'mongoose';

export interface IFrameworkControllerUpdateFrameworkOutputSuccess {
  error: false;
  payload: {
    frameworkId: Types.ObjectId;
    responseStatusCode: number;
  };
}
