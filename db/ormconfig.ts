/* eslint-disable prettier/prettier */
import { DataSource, DataSourceOptions } from 'typeorm';
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: '20.25.82.188',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'db_livebi',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  migrations: ['dist/src/migrations/*.js'],
    
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
