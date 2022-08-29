import { User } from "../entities/User";
import { createConnection } from "typeorm";

export const setupTypeOrm = async () => {
  // @ts-ignore
  const conn = await createConnection({
    type: "postgres",
    database: "backgammon",
    username: "postgres",
    password: "postgres", // TODO: hide password and username
    logging: true,
    synchronize: true,
    entities: [User],
  });
};
