import { FrameworkTypeModel } from '@app-ae/api/models';

export const frameworkTypeControllerUpdateFrameworkType = async ({
  frameworkTypeId,
  payload,
}) => {
  const res = await FrameworkTypeModel.findOneAndUpdate(
    {
      _id: frameworkTypeId,
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
