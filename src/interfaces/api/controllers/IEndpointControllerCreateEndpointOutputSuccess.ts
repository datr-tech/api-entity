import { Types } from 'mongoose';

export interface IEndpointControllerCreateEndpointOutputSuccess {
  error: false;
  payload: {
    endpointId: Types.ObjectId;
    responseStatusCode: number;
  };
}
