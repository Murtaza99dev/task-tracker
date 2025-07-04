import React, { useState, useEffect } from "react"
import { TaskDialog } from "@/components/taskDialog/taskDialog"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
  Plus,
  MoreHorizontal,
  User,
} from "lucide-react"
import type { Task } from "@/types/task"
import { DashboardSidebar } from "@/components/layout/layout"

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  const saveTasks = (updatedTasks: Task[]) => {
    setTasks(updatedTasks)
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }

  const handleCreateTask = (taskData: Omit<Task, "id" | "createdAt" | "updatedAt">) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    saveTasks([...tasks, newTask])
  }

  const handleUpdateTask = (taskId: string, taskData: Omit<Task, "id" | "createdAt" | "updatedAt">) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...taskData, updatedAt: new Date().toISOString() } : task
    )
    saveTasks(updatedTasks)
  }

  const handleEditTask = (task: Task) => {
    setEditingTask(task)
    setIsTaskDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsTaskDialogOpen(false)
    setEditingTask(null)
  }

  const todoTasks = tasks.filter((task) => task.status === "todo")
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress")
  const completedTasks = tasks.filter((task) => task.status === "completed")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "todo":
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">
    <DashboardSidebar/>
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back! Here's what's happening with your tasks.</p>
            </div>
            <Button onClick={() => setIsTaskDialogOpen(true)} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Task
            </Button>
          </div>
        </header>

        {/* Stats */}
        <main className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Tasks</p>
                <p className="text-2xl font-bold text-gray-900">{tasks.length}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center">
              <div className="p-3 bg-gray-100 rounded-lg">
                <Clock className="h-6 w-6 text-gray-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">To Do</p>
                <p className="text-2xl font-bold text-gray-900">{todoTasks.length}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <AlertCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">{inProgressTasks.length}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{completedTasks.length}</p>
              </div>
            </div>
          </div>

          {/* Recent Tasks */}
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Recent Tasks</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsTaskDialogOpen(true)}>
                Add Task
              </Button>
            </div>
            <div className="divide-y divide-gray-200">
              {tasks.slice(0, 10).map((task) => (
                <div key={task.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-sm font-medium text-gray-900">{task.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(task.status)}`}>
                          {task.status.replace("-", " ")}
                        </span>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)}`}
                        >
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {task.dueDate}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {task.assignee}
                        </div>
                      </div>
                    </div>
                    <button
                      className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                      onClick={() => handleEditTask(task)}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Task Dialog */}
          <TaskDialog
            open={isTaskDialogOpen}
            onClose={handleCloseDialog}
            onSubmit={
              editingTask
                ? (data) => handleUpdateTask(editingTask.id, data)
                : handleCreateTask
            }
            task={editingTask}
          />
        </main>
      </div>

      </div>
  )
}

export default Dashboard
