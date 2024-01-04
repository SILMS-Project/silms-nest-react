import { TestDBInitiator } from './config.e2e';
import * as dotenv from 'dotenv';

dotenv.config();

module.exports = async () => {
    globalThis.databaseConfig = new TestDBInitiator();
    await globalThis.databaseConfig.dropDatabase();
  };