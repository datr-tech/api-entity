import { model, Schema } from 'mongoose';
import { resourceModelSchema, resourceModelSchemaOptions } from '@freight/entity-model-schemas';
import {
  modelValidatorEndpointId,
  modelValidatorResourceTypeId,
  modelValidatorServiceId,
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app/api/modelValidators';

const resourceSchema = new Schema(resourceModelSchema, resourceModelSchemaOptions);

resourceSchema.post('validate', modelValidatorEndpointId);
resourceSchema.post('validate', modelValidatorResourceTypeId);
resourceSchema.post('validate', modelValidatorServiceId);
resourceSchema.post('validate', modelValidatorAdminStatusId);
resourceSchema.post('validate', modelValidatorAdminUserId);

export const ResourceModel = model('ResourceModel', resourceSchema);
