import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorEndpointId,
  modelValidatorResourceTypeId,
  modelValidatorServiceId,
} from '@app/api/modelValidators';
import {
  resourceModelSchema,
  resourceModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-entity';
import { model, Schema } from 'mongoose';

const resourceSchema = new Schema(resourceModelSchema, resourceModelSchemaOptions);

resourceSchema.post('validate', modelValidatorEndpointId);
resourceSchema.post('validate', modelValidatorResourceTypeId);
resourceSchema.post('validate', modelValidatorServiceId);
resourceSchema.post('validate', modelValidatorAdminStatusId);
resourceSchema.post('validate', modelValidatorAdminUserId);

export const ResourceModel = model('ResourceModel', resourceSchema);
