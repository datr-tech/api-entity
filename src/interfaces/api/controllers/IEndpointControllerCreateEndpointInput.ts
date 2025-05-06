import { Types } from 'mongoose';

export interface IEndpointControllerCreateEndpointInput {
  endpointTypeId: Types.ObjectId;
  url: string;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
