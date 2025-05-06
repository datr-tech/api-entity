import { Types } from 'mongoose';

export interface IResourceTypeControllerUpdateResourceTypeOutputSuccess {
  error: false;
  payload: {
    resourceTypeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
