import { FrameworkModel } from '@app-ae/api/models';

export const frameworkControllerUpdateFramework = async ({ frameworkId, payload }) => {
  const res = await FrameworkModel.findOneAndUpdate(
    {
      _id: frameworkId,
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
