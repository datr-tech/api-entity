import { model, Schema } from 'mongoose';
import { endpointModelSchema, endpointModelSchemaOptions } from '@freight/entity-model-schemas';
import { modelValidatorEndpointTypeId, modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const endpointSchema = new Schema(endpointModelSchema, endpointModelSchemaOptions);

endpointSchema.post('validate', modelValidatorEndpointTypeId);
endpointSchema.post('validate', modelValidatorAdminStatusId);
endpointSchema.post('validate', modelValidatorAdminUserId);

export const EndpointModel = model('EndpointModel', endpointSchema);
