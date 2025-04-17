import { model, Schema } from 'mongoose';
import { frameworkModelSchema, frameworkModelSchemaOptions } from '@freight/entity-model-schemas';
import { modelValidatorFrameworkTypeId, modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const frameworkSchema = new Schema(frameworkModelSchema, frameworkModelSchemaOptions);

frameworkSchema.post('validate', modelValidatorFrameworkTypeId);
frameworkSchema.post('validate', modelValidatorAdminStatusId);
frameworkSchema.post('validate', modelValidatorAdminUserId);

export const FrameworkModel = model('FrameworkModel', frameworkSchema);
