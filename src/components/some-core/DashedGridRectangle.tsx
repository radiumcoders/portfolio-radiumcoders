import * as React from "react"
import { cn } from "../../lib/utils"

export interface DashedGridRectangleProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashedGridRectangle({
  className,
  children,
  ...props
}: DashedGridRectangleProps) {
  return (
    <div
      className={cn(
        "relative h-32 w-full overflow-hidden bg-background",
        className
      )}
      {...props}
    >
      {/* Noise Texture (Darker Dots) Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Content */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  )
}

export default DashedGridRectangle
