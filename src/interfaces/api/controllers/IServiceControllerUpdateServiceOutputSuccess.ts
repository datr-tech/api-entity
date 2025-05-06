import { Types } from 'mongoose';

export interface IServiceControllerUpdateServiceOutputSuccess {
  error: false;
  payload: {
    serviceId: Types.ObjectId;
    responseStatusCode: number;
  };
}
