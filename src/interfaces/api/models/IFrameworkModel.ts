import { Types } from 'mongoose';

export interface IFrameworkModel {
  frameworkId: Types.ObjectId;
  frameworkTypeId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
