import { Types } from 'mongoose';

export interface IFrameworkControllerDeleteFrameworkOutputSuccess {
  error: false;
  payload: {
    frameworkId: Types.ObjectId;
  };
}
