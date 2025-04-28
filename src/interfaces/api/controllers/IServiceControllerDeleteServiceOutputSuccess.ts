import { Types } from 'mongoose';

export interface IServiceControllerDeleteServiceOutputSuccess {
  error: false;
  payload: {
    serviceId: Types.ObjectId;
  };
}
