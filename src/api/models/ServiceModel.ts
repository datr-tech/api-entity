import { model, Schema } from 'mongoose';
import { serviceModelSchema, serviceModelSchemaOptions } from '@freight/entity-model-schemas';
import { modelValidatorFrameworkId, modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const serviceSchema = new Schema(serviceModelSchema, serviceModelSchemaOptions);

serviceSchema.post('validate', modelValidatorFrameworkId);
serviceSchema.post('validate', modelValidatorAdminStatusId);
serviceSchema.post('validate', modelValidatorAdminUserId);

export const ServiceModel = model('ServiceModel', serviceSchema);
