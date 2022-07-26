import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { EXPIRES_IN, TOKEN_KEY } from "./utils/jwt";
import { COOKIE_HEADER } from "./utils/cookie";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();
  const salt = bcrypt.genSaltSync();
  const { email, password } = req.body;

  let user;

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
      },
    });
  } catch (e) {
    console.error(e);
    res.status(401);
    res.json({ error: "User already exists" });
    return;
  }

  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      time: Date.now(),
    },
    TOKEN_KEY,
    { expiresIn: EXPIRES_IN }
  );

  res.setHeader(
    "Set-Cookie",
    cookie.serialize(COOKIE_HEADER, token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60, // 8 hours
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })
  );

  res.json(user);
};
