import { DataSource } from "typeorm";
import { User } from "../models/user";
import { Item } from "../models/item";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? "5432", 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false, // use migrations
  logging: false,
  entities: [User, Item],
  migrations: [__dirname + "/migrations/*.ts"],
  subscribers: [],
  cli: {
    migrationsDir: "src/database/migrations",
  },
});
```

---