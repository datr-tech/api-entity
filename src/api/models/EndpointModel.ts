import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorEndpointTypeId,
} from '@app/api/modelValidators';
import {
  endpointModelSchema,
  endpointModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-entity';
import { model, Schema } from 'mongoose';

const endpointSchema = new Schema(endpointModelSchema, endpointModelSchemaOptions);

endpointSchema.post('validate', modelValidatorEndpointTypeId);
endpointSchema.post('validate', modelValidatorAdminStatusId);
endpointSchema.post('validate', modelValidatorAdminUserId);

export const EndpointModel = model('EndpointModel', endpointSchema);
