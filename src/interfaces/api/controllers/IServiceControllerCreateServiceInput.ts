import { Types } from 'mongoose';

export interface IServiceControllerCreateServiceInput {
  frameworkId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt: number;
}
