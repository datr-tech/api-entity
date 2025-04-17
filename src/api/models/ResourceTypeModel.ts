import { model, Schema } from 'mongoose';
import { resourceTypeModelSchema, resourceTypeModelSchemaOptions } from '@freight/entity-model-schemas';
import { modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const resourceTypeSchema = new Schema(resourceTypeModelSchema, resourceTypeModelSchemaOptions);

resourceTypeSchema.post('validate', modelValidatorAdminStatusId);
resourceTypeSchema.post('validate', modelValidatorAdminUserId);

export const ResourceTypeModel = model('ResourceTypeModel', resourceTypeSchema);
