import { Types } from 'mongoose';

export interface IResourceControllerUpdateResourceOutputSuccess {
  error: false;
  payload: {
    resourceId: Types.ObjectId;
  };
}
