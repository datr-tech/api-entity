import { Types } from 'mongoose';

export interface IResourceControllerCreateResourceOutputSuccess {
  error: false;
  payload: {
    resourceId: Types.ObjectId;
    responseStatusCode: number;
  };
}
