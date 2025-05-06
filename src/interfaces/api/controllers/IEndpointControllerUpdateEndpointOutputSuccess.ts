import { Types } from 'mongoose';

export interface IEndpointControllerUpdateEndpointOutputSuccess {
  error: false;
  payload: {
    endpointId: Types.ObjectId;
    responseStatusCode: number;
  };
}
