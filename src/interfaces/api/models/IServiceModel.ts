import { Types } from 'mongoose';

export interface IServiceModel {
  serviceId: Types.ObjectId;
  frameworkId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
