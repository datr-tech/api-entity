import { Types } from 'mongoose';

export interface IResourceModel {
  resourceId: Types.ObjectId;
  endpointId: Types.ObjectId;
  resourceTypeId: Types.ObjectId;
  serviceId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
