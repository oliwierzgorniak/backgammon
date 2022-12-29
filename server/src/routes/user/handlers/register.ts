import * as argon2 from "argon2";
import prisma from "../../../clients/prisma";
import { Request, Response } from "express";
import { Prisma } from "@prisma/client";

export default async function register(req: Request, res: Response) {
  const { username, email, password } = req.body;

  const hashedPassword = await argon2.hash(password);
  try {
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });

    req.session.userId = user.id;
    res.json({ success: true });
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === "P2002" &&
      typeof e.meta !== "undefined" &&
      Array.isArray(e.meta.target)
    ) {
      if (e.meta.target.includes("mail")) {
        res.status(400).json({
          success: false,
          field: "email",
          message: "mail is already in use",
        });
      } else if (e.meta.target.includes("username")) {
        res.status(400).json({
          success: false,
          field: "username",
          message: "username is already in use",
        });
      }
    } else {
      res.status(500).json({ success: false, message: "unknown error" });
    }
  }
}
