import { app } from '@app-ae/api';
import {
  EndpointModel,
  EndpointTypeModel,
  FrameworkModel,
  FrameworkTypeModel,
  ResourceModel,
  ResourceTypeModel,
  ServiceModel,
} from '@app-ae/api/models';
import { apiName, apiPort, dbHost, dbName, dbPort } from '@app-ae/config';
import { logger } from '@datr.tech/leith-common-logger';
import { db } from '@datr.tech/leith-common-mongodb-connector';
import { entitySeeder } from '@datr.tech/leith-common-seeders';
import 'dotenv/config';

app.listen(apiPort, () => {
  logger.info(`api-${apiName} listening on ${apiPort}`);

  (async () => {
    const stat = await db.connect({
      host: dbHost,
      name: dbName,
      port: dbPort,
      user: undefined,
      pass: undefined,
    });

    const { isConnected } = stat;

    if (isConnected) {
      await entitySeeder(
        EndpointModel,
        EndpointTypeModel,
        FrameworkModel,
        FrameworkTypeModel,
        ResourceModel,
        ResourceTypeModel,
        ServiceModel,
      );
    }
  })();
});
