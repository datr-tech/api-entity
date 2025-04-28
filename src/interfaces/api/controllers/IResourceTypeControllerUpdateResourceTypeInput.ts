import { Types } from 'mongoose';

export interface IResourceTypeControllerUpdateResourceTypeInput {
  resourceTypeId: Types.ObjectId;
  payload: {
    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
