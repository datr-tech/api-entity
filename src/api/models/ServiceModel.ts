import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorFrameworkId,
} from '@app/api/modelValidators';
import {
  serviceModelSchema,
  serviceModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-entity';
import { model, Schema } from 'mongoose';

const serviceSchema = new Schema(serviceModelSchema, serviceModelSchemaOptions);

serviceSchema.post('validate', modelValidatorFrameworkId);
serviceSchema.post('validate', modelValidatorAdminStatusId);
serviceSchema.post('validate', modelValidatorAdminUserId);

export const ServiceModel = model('ServiceModel', serviceSchema);
