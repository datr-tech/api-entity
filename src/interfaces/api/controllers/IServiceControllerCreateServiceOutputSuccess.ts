import { Types } from 'mongoose';

export interface IServiceControllerCreateServiceOutputSuccess {
  error: false;
  payload: {
    serviceId: Types.ObjectId;
    responseStatusCode: number;
  };
}
