import { Types } from 'mongoose';

export interface IEndpointControllerUpdateEndpointInput {
  endpointId: Types.ObjectId;
  payload: {
    endpointTypeId?: Types.ObjectId;

    url?: string;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
