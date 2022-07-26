import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import { EXPIRES_IN, TOKEN_KEY } from "./utils/jwt";
import { COOKIE_HEADER } from "./utils/cookie";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        time: Date.now(),
      },
      TOKEN_KEY,
      {
        expiresIn: EXPIRES_IN,
      }
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
  } else {
    res.status(401);
    res.json({ error: "User not found" });
  }
};
