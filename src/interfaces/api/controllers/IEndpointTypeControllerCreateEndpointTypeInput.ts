import { Types } from 'mongoose';

export interface IEndpointTypeControllerCreateEndpointTypeInput {
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt: number;
}
