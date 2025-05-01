import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-ae/api/modelValidators/foreign';
import { modelValidatorEndpointId } from '@app-ae/api/modelValidators/local/modelValidatorEndpointId';
import { modelValidatorResourceTypeId } from '@app-ae/api/modelValidators/local/modelValidatorResourceTypeId';
import { modelValidatorServiceId } from '@app-ae/api/modelValidators/local/modelValidatorServiceId';
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
