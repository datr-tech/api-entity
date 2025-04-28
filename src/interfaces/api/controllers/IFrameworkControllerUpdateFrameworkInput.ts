import { Types } from 'mongoose';

export interface IFrameworkControllerUpdateFrameworkInput {
  frameworkId: Types.ObjectId;
  payload: {
    frameworkTypeId?: Types.ObjectId;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
