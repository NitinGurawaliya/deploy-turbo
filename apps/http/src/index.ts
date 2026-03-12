import  express from "express"
import {client} from "@repo/db/client"
import type { Request,Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi there");
});


app.post('/signin', async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { password, username } = req.body;
    console.log(password, username);

    const user = await client.user.create({
      data: { username, password },
    });

    return res.json({
      msg: "sign up success",
      user,
    });
  } catch (e: any) {
    console.error("Prisma error:", e.code, e.meta, e.message);

    return res.status(500).json({
      msg: "db error",
      code: e.code,
      meta: e.meta,
    });
  }
});

app.listen(3002);