import { Types } from 'mongoose';

export interface IServiceControllerUpdateServiceInput {
  serviceId: Types.ObjectId;
  payload: {
    frameworkId?: Types.ObjectId;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
