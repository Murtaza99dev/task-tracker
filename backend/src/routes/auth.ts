// src/routes/auth.ts
import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { registerSchema, loginSchema } from "../validators/auth";
import { db } from "../db/db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";

const authRoutes = Router();

authRoutes.post("/register", async (req: Request, res: Response): Promise<void> => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json(parsed.error);
    return;
  }

  const { username, password } = parsed.data;

  const existingUser = await db.select().from(users).where(eq(users.username, username));
  if (existingUser.length > 0) {
    res.status(400).json({ message: "User exists" });
    return;
  }

  const hash = await bcrypt.hash(password, 10);
  const result = await db.insert(users).values({ username, password: hash }).returning();

  const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET!, { expiresIn: "7d" });
  res.json({ token });
});

authRoutes.post("/login", async (req: Request, res: Response): Promise<void> => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json(parsed.error);
    return;
  }

  const { username, password } = parsed.data;

  const user = await db.select().from(users).where(eq(users.username, username));
  if (user.length === 0) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }

  const valid = await bcrypt.compare(password, user[0].password);
  if (!valid) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }

  const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET!, { expiresIn: "7d" });
  res.json({ token });
});


export default authRoutes;
