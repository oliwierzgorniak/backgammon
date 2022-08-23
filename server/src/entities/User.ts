import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType } from "type-graphql";

@Entity()
@ObjectType()
export class User {
  @PrimaryKey()
  id!: number;

  @Property({ type: "string" })
  email: string;

  @Property({ type: "string" })
  username: string;

  @Property({ type: "string" })
  password: string;

  @Property({ type: "date" })
  createdAt = new Date();
}
