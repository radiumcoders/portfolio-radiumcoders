import * as React from "react"
import { cn } from "@/lib/utils"

export interface PatternSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
}

export function PatternSeparator({
  orientation = "horizontal",
  className,
  ...props
}: PatternSeparatorProps) {
  return (
    <div
      className={cn(
        // The repeating diagonal lines pattern using currentColor so it easily themes
        "relative bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] text-border/50",
        // Conditional styling based on orientation
        orientation === "vertical"
          ? "h-full w-10 border-x border-border"
          : "h-10 w-full border-y border-border",
        className
      )}
      {...props}
    />
  )
}
