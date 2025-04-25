import { EndpointModel } from '@app-ae/api/models';

export const endpointControllerUpdateEndpoint = async ({ endpointId, payload }) => {
  const res = await EndpointModel.findOneAndUpdate(
    {
      _id: endpointId,
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
