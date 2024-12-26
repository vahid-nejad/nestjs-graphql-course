import * as path from 'path';
import { registerAs } from '@nestjs/config';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

export default registerAs(
  'dbconfig.dev',
  (): SqliteConnectionOptions => ({
    // Don't put this here, Instead put in the env file
    database: process.env.DATABASE_URL,
    type: 'sqlite',

    entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],

    synchronize: true,
  }),
);
