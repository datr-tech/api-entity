import { model, Schema } from 'mongoose';
import { frameworkTypeModelSchema, frameworkTypeModelSchemaOptions } from '@freight/entity-model-schemas';
import { modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const frameworkTypeSchema = new Schema(frameworkTypeModelSchema, frameworkTypeModelSchemaOptions);

frameworkTypeSchema.post('validate', modelValidatorAdminStatusId);
frameworkTypeSchema.post('validate', modelValidatorAdminUserId);

export const FrameworkTypeModel = model('FrameworkTypeModel', frameworkTypeSchema);
