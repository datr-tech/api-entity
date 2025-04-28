import { Types } from 'mongoose';

export interface IResourceTypeControllerDeleteResourceTypeOutputSuccess {
  error: false;
  payload: {
    resourceTypeId: Types.ObjectId;
  };
}
