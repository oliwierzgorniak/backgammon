import argon2 from "argon2";
import { Request, Response } from "express";
import prisma from "../../../clients/prisma";

export default async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (user?.password) {
    console.log(req.body);
    console.log(user.password);
    console.log(await argon2.verify(user.password, password));
  }

  // if (!user) {
  //   res.json({ success: false, field: "email", message: "user not found" });
  //   return;
  // }

  // if (await argon2.verify(user.password, password)) {
  //   req.session.userId = user.id;
  //   res.end({ success: true });
  // } else {
  //   res.json({ success: false, field: "password", messsage: "wrong password" });
  // }
}
