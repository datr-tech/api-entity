import { Types } from 'mongoose';

export interface IResourceControllerUpdateResourceInput {
  resourceId: Types.ObjectId;
  payload: {
    endpointId?: Types.ObjectId;

    resourceTypeId?: Types.ObjectId;

    serviceId?: Types.ObjectId;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
