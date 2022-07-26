import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { COOKIE_HEADER } from "../pages/api/utils/cookie";
import { TOKEN_KEY } from "../pages/api/utils/jwt";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const token = req.cookies[COOKIE_HEADER];

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, TOKEN_KEY);

        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("No user found");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not Authorized" });
      }

      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not Authorized" });
  };
};
