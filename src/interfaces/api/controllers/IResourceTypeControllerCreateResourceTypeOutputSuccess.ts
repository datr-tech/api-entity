import { Types } from 'mongoose';

export interface IResourceTypeControllerCreateResourceTypeOutputSuccess {
  error: false;
  payload: {
    resourceTypeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
