import { ServiceModel } from '@app/api/models';

export const serviceControllerUpdateService = async ({ serviceId, payload }) => {
  const res = await ServiceModel.findOneAndUpdate(
    {
      _id: serviceId,
    },
    payload,
    {
      includeResultMetadata: true,
    },
  );

  let existingDocUpdated;

  if (
    typeof res !== 'undefined' &&
    typeof res.lastErrorObject !== 'undefined' &&
    typeof res.lastErrorObject.updatedExisting !== 'undefined'
  ) {
    existingDocUpdated = res.lastErrorObject.updatedExisting === false;
  }

  return existingDocUpdated;
};
