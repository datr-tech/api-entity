import { model, Schema } from 'mongoose';
import { endpointTypeModelSchema, endpointTypeModelSchemaOptions } from '@freight/entity-model-schemas';
import { modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const endpointTypeSchema = new Schema(endpointTypeModelSchema, endpointTypeModelSchemaOptions);

endpointTypeSchema.post('validate', modelValidatorAdminStatusId);
endpointTypeSchema.post('validate', modelValidatorAdminUserId);

export const EndpointTypeModel = model('EndpointTypeModel', endpointTypeSchema);
