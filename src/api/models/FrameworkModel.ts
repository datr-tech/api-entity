import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-ae/api/modelValidators/foreign';
import { modelValidatorFrameworkTypeId } from '@app-ae/api/modelValidators/local/modelValidatorFrameworkTypeId';
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
