// src/routes/tasks.ts
import { Router, Response } from "express";
import { z } from "zod";
import { and, eq } from "drizzle-orm";
import { db } from "../db/db";
import { tasks } from "../db/schema";
import { AuthRequest } from "../middleware/auth";

const taskSchema = z.object({
  title: z.string().min(1),
});

const taskRouter = Router();

// GET all tasks for logged-in user
taskRouter.get("/", async (req: AuthRequest, res: Response): Promise<void> => {
  const result = await db
    .select()
    .from(tasks)
    .where(eq(tasks.user_id, req.user!.id));
  res.json(result);
});

// POST create a new task
taskRouter.post("/", async (req: AuthRequest, res: Response): Promise<void> => {
  const parsed = taskSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json(parsed.error);
    return;
  }

  const { title } = parsed.data;

  await db.insert(tasks).values({
    user_id: req.user!.id,
    title,
  });

  res.status(201).json({ message: "Task created" });
});

// PUT update task completion status
taskRouter.put("/:id", async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;
  const { completed } = req.body;

await db
  .update(tasks)
  .set({ completed })
  .where(and(eq(tasks.id, Number(id)), eq(tasks.user_id, req.user!.id)));


  res.json({ message: "Task updated" });
});

// DELETE a task
taskRouter.delete("/:id", async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;

await db
  .delete(tasks)
  .where(and(eq(tasks.id, Number(id)), eq(tasks.user_id, req.user!.id)));

  res.json({ message: "Task deleted" });
});

export default taskRouter;
