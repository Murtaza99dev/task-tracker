import React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive"
}

const badgeVariants = {
  default: "bg-emerald-600 text-white",
  secondary: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  destructive: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
}
