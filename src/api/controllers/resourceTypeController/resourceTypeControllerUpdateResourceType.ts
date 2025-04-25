import { ResourceTypeModel } from '@app-ae/api/models';

export const resourceTypeControllerUpdateResourceType = async ({
  resourceTypeId,
  payload,
}) => {
  const res = await ResourceTypeModel.findOneAndUpdate(
    {
      _id: resourceTypeId,
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
