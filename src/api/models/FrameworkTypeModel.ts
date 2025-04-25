import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-ae/api/modelValidators';
import {
  frameworkTypeModelSchema,
  frameworkTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-entity';
import { model, Schema } from 'mongoose';

const frameworkTypeSchema = new Schema(
  frameworkTypeModelSchema,
  frameworkTypeModelSchemaOptions,
);

frameworkTypeSchema.post('validate', modelValidatorAdminStatusId);
frameworkTypeSchema.post('validate', modelValidatorAdminUserId);

export const FrameworkTypeModel = model('FrameworkTypeModel', frameworkTypeSchema);
