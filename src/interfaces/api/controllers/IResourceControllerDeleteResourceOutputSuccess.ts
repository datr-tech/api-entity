import { Types } from 'mongoose';

export interface IResourceControllerDeleteResourceOutputSuccess {
  error: false;
  payload: {
    resourceId: Types.ObjectId;
  };
}
