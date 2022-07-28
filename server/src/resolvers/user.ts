import { PrismaClient } from "@prisma/client";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  async register(
    @Arg("email") email: string,
    @Arg("nickname") nickname: string,
    @Arg("password") password: string,
    @Ctx() prisma: PrismaClient
  ): Promise<string> {
    try {
      await prisma.user.create({
        data: {
          email: email,
          nickname: nickname,
          password: password,
        },
      });
      return "user registered";
    } catch (err) {
      return "User NOT registered! Err: " + err;
    }
  }
}
