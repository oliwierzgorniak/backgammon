import {
  Resolver,
  Mutation,
  Arg,
  Field,
  Ctx,
  ObjectType,
  Query,
} from "type-graphql";
import { MyContext } from "../types";
import { User } from "../entities/User";
import argon2 from "argon2";

@ObjectType()
class Error {
  @Field()
  field?: string;
  @Field()
  message: string;
}

@ObjectType()
class SuccessfulMessage {
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [Error], { nullable: true })
  errors?: Error[];

  @Field(() => SuccessfulMessage, { nullable: true })
  successfulMessage?: SuccessfulMessage;
}

@Resolver()
export class UserResolver {
  @Query(() => User)
  async getUser(@Arg("username") username: string) {
    const user = await User.findOne({ where: username });
    return user;
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    // you are not logged in
    if (!req.session!.userId) {
      return null;
    }

    const user = await User.findOne(req.session.userId);
    return user;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("email") email: string,
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    if (username.length <= 2) {
      return {
        errors: [
          {
            field: "username",
            message: "length must be greater than 2",
          },
        ],
      };
    }

    if (password.length <= 2) {
      return {
        errors: [
          {
            field: "password",
            message: "length must be greater than 2",
          },
        ],
      };
    }

    const hashedPassword = await argon2.hash(password);
    let user;
    try {
      user = await User.create({
        email: email,
        username: username,
        password: hashedPassword,
      }).save();
    } catch (err) {
      // unique key error
      if (err.code === "23505") {
        if (err.detail.includes("username")) {
          return {
            errors: [
              {
                field: "username",
                message: "username already used",
              },
            ],
          };
        }

        if (err.detail.includes("email")) {
          return {
            errors: [
              {
                field: "email",
                message: "email already used",
              },
            ],
          };
        }
      }

      return {
        errors: [{ message: "error while trying to add user to the database" }],
      };
    }

    // setting cookie
    req.session.userId = user.id;

    return {
      successfulMessage: {
        message: "user registered",
      },
    };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return {
        errors: [
          {
            field: "username",
            message: "that username doesn't exist",
          },
        ],
      };
    }

    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "incorrect password",
          },
        ],
      };
    }

    req.session.userId = user.id;

    return {
      successfulMessage: {
        message: "user logged in",
      },
    };
  }
}
