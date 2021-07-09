import {Knex} from 'knex';
import * as path from 'path'

const dbConnectionConfig: Knex.Config = {
  client: "mysql",
  connection: {
    host: "mysql",
    user: "root",
    port: 3306,
    password: "password",
    database: "recipe-app-db",
  },
  migrations: {
    extension: 'ts',
    tableName: 'recipe_migrations',
    directory: path.join(__dirname, "./", "migrations"),
  }
}

export default dbConnectionConfig