import { ResourceModel } from '@app/api/models';

export const resourceControllerUpdateResource = async ({ resourceId, payload }) => {
  const res = await ResourceModel.findOneAndUpdate(
    {
      _id: resourceId,
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
