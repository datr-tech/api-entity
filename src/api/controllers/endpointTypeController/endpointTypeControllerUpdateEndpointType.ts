import { EndpointTypeModel } from '@app/api/models';

export const endpointTypeControllerUpdateEndpointType = async ({ endpointTypeId, payload }) => {
  const res = await EndpointTypeModel.findOneAndUpdate(
    {
      _id: endpointTypeId,
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
