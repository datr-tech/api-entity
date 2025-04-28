import { Types } from 'mongoose';

export interface IFrameworkControllerCreateFrameworkOutputSuccess {
  error: false;
  payload: {
    frameworkId: Types.ObjectId;
  };
}
