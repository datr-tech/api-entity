import { Types } from 'mongoose';

export interface IEndpointModel {
  endpointId: Types.ObjectId;
  endpointTypeId: Types.ObjectId;
  url: string;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
