import * as path from 'path';
import { registerAs } from '@nestjs/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export default registerAs(
  'dbconfig.dev',
  (): PostgresConnectionOptions => ({
    // Don't put this here, Instead put in the env file
    url: process.env.DATABASE_URL,
    type: 'postgres',

    entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],

    synchronize: true,
  }),
);
