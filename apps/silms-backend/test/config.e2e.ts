import { ConfigService } from '@nestjs/config';
import { getConfig } from '../src/configurations/testdb.config';
import { DataSource } from 'typeorm';
import { createDatabase, dropDatabase } from 'typeorm-extension';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';


export async function createTestDataSource(
    dbOptions: SqliteConnectionOptions,
  ) {
    const dataSource = new DataSource(dbOptions);
    await dataSource.initialize();
    return dataSource;
  }
  
export class TestDBInitiator {
  private readonly initialDatabase: string;
  private readonly testDatabase = 'db_test';
  readonly dbOptions: SqliteConnectionOptions;
  readonly configService: ConfigService;

  constructor() {
    this.configService = new ConfigService();
    const config = getConfig(this.configService);

    this.initialDatabase = config.database;
    this.dbOptions = {
      ...config,
      database: this.testDatabase,
    };
  }

  async createDatabase() {
    await this.dropDatabase();
    console.log(`Creating test database '${this.dbOptions.database}'`);
    await createDatabase({
      options: this.dbOptions,
      initialDatabase: this.initialDatabase,
      ifNotExist: false,
    });
    const dataSource = await createTestDataSource(this.dbOptions);
  
    console.log('Running migrations');
    dataSource.runMigrations({ transaction: 'all' });
    await dataSource.destroy();
  
    console.log('✓ Done. Test database is ready to accept connections ✓\n');
  }

  async dropDatabase() {
    console.log(`Dropping test database '${this.testDatabase}'`);
  
    // SQLite doesn't require separate connections or termination queries
    await dropDatabase({ options: this.dbOptions });
  }

  
}
