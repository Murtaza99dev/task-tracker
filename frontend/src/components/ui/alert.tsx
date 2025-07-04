import * as React from "react"
import { cn } from "@/lib/utils"

type AlertVariant = "default" | "destructive"

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variantClass =
      variant === "destructive"
        ? "border-red-500 bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
        : "border border-gray-300 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"

    return (
      <div
        ref={ref}
        className={cn("w-full rounded-md p-3 text-sm", variantClass, className)}
        {...props}
      />
    )
  }
)

Alert.displayName = "Alert"

export const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm", className)} {...props} />
  )
)

AlertDescription.displayName = "AlertDescription"
