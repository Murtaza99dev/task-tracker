export type Task = {
  id: string
  title: string
  description?: string
  dueDate: string
  status: "todo" | "in-progress" | "completed"
  createdAt: string
  updatedAt: string
  priority: "low" | "medium" | "high" // ✅ Add this
  assignee: string                    // ✅ And this
}
