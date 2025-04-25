import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-ae/api/modelValidators';
import {
  endpointTypeModelSchema,
  endpointTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-entity';
import { model, Schema } from 'mongoose';

const endpointTypeSchema = new Schema(
  endpointTypeModelSchema,
  endpointTypeModelSchemaOptions,
);

endpointTypeSchema.post('validate', modelValidatorAdminStatusId);
endpointTypeSchema.post('validate', modelValidatorAdminUserId);

export const EndpointTypeModel = model('EndpointTypeModel', endpointTypeSchema);
