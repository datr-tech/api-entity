import { Types } from 'mongoose';

export interface IResourceControllerCreateResourceInput {
  endpointId: Types.ObjectId;
  resourceTypeId: Types.ObjectId;
  serviceId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
