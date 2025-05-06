import { Types } from 'mongoose';

export interface IEndpointTypeControllerCreateEndpointTypeOutputSuccess {
  error: false;
  payload: {
    endpointTypeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
