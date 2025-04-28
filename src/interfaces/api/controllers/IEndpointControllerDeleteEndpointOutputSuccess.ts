import { Types } from 'mongoose';

export interface IEndpointControllerDeleteEndpointOutputSuccess {
  error: false;
  payload: {
    endpointId: Types.ObjectId;
  };
}
