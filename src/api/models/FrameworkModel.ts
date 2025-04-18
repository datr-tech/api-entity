import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorFrameworkTypeId,
} from '@app/api/modelValidators';
import {
  frameworkModelSchema,
  frameworkModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-entity';
import { model, Schema } from 'mongoose';

const frameworkSchema = new Schema(frameworkModelSchema, frameworkModelSchemaOptions);

frameworkSchema.post('validate', modelValidatorFrameworkTypeId);
frameworkSchema.post('validate', modelValidatorAdminStatusId);
frameworkSchema.post('validate', modelValidatorAdminUserId);

export const FrameworkModel = model('FrameworkModel', frameworkSchema);
