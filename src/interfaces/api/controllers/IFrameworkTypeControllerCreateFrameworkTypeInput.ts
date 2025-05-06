import { Types } from 'mongoose';

export interface IFrameworkTypeControllerCreateFrameworkTypeInput {
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
