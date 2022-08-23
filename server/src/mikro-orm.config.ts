import path from "path";
import { __prod__ } from "./constants";
import { User } from "./entities/User";

export default {
  entities: [User],
  dbName: "backgammon",
  type: "postgresql",
  debug: !__prod__,
  user: "postgres",
  password: "postgres",
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
};
