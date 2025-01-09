import User from "./schemas/user";
import { DataSource } from "typeorm";

const { DB_PASSWORD, DB_USER, DB_HOST, DB_NAME } = process.env;

export default new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});
