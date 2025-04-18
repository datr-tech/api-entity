import { app } from '@app/api';
import { db } from '@datr.tech/leith-common-mongodb-connector';
import { logger } from '@datr.tech/leith-common-logger';
import 'dotenv/config';

const { API_NAME, API_PORT } = process.env;

app.listen(API_PORT, () => {
  logger.info(`${API_NAME} listening on ${API_PORT}`);

  (async () => {
    await db.connect();
  })();
});
