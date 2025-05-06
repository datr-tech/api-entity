import { FrameworkTypeModel } from '@app-ae/api/models';

export const seedFrameworkType = async () => {
  const fieldValue = {
    adminStatusId: {
      active: '6814ce08adfdc6876fffef7b',
      deleted: '6814cf0628916160770a5510',
      suspended: '6814ce44bdfbb0b33dfa2a30',
    },
    adminUserId: '6814cc844e30a5677bc86a5c',
    createdAt: new Date(0),
    description: {
      datrTech: 'The framework for all internal datr.tech packages',
      external: 'An external framework',
      internal: 'An internal framework',
    },
    frameworkId: '6814cd287b7ad154167f4c67',
    frameworkTypeId: {
      external: '6814cc4e69a55a6d51291339',
      internal: '6814cd62c81331d600b200fd',
    },
    name: {
      datrTech: 'datr.tech',
      external: 'external',
      internal: 'internal',
    },
  };

  const frameworkTypeInternalRecord = {
    id: fieldValue.frameworkTypeId.internal,
    name: fieldValue.name.internal,
    description: fieldValue.description.internal,
    adminStatusId: fieldValue.adminStatusId.active,
    adminUserId: fieldValue.adminUserId,
    createdAt: fieldValue.createdAt,
  };

  const frameworkTypeExternalRecord = {
    id: fieldValue.frameworkTypeId.external,
    name: fieldValue.name.external,
    description: fieldValue.description.external,
    adminStatusId: fieldValue.adminStatusId.active,
    adminUserId: fieldValue.adminUserId,
    createdAt: fieldValue.createdAt,
  };

  const frameworkTypeModelExternal = new FrameworkTypeModel(frameworkTypeExternalRecord);
  const frameworkTypeModelInternal = new FrameworkTypeModel(frameworkTypeInternalRecord);

  await frameworkTypeModelExternal.save();
  await frameworkTypeModelInternal.save();
};
