import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-ae/api/modelValidators';
import {
  resourceTypeModelSchema,
  resourceTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-entity';
import { model, Schema } from 'mongoose';

const resourceTypeSchema = new Schema(
  resourceTypeModelSchema,
  resourceTypeModelSchemaOptions,
);

resourceTypeSchema.post('validate', modelValidatorAdminStatusId);
resourceTypeSchema.post('validate', modelValidatorAdminUserId);

export const ResourceTypeModel = model('ResourceTypeModel', resourceTypeSchema);
