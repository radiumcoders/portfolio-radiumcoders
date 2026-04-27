import * as React from "react"
import { cn } from "../../lib/utils"

export interface JayLogoProps extends React.SVGProps<SVGSVGElement> {}

export function JayLogo({ className, ...props }: JayLogoProps) {
  return (
    <svg
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-auto text-current", className)}
      {...props}
    >
      {/* Letter J */}
      <rect x="30" y="0" width="10" height="30" fill="currentColor" />
      <rect x="0" y="20" width="10" height="10" fill="currentColor" />
      <rect x="10" y="30" width="20" height="10" fill="currentColor" />

      {/* Letter A */}
      <rect x="60" y="0" width="20" height="10" fill="currentColor" />
      <rect x="50" y="10" width="10" height="30" fill="currentColor" />
      <rect x="80" y="10" width="10" height="30" fill="currentColor" />
      <rect x="60" y="20" width="20" height="10" fill="currentColor" />

      {/* Letter Y */}
      <rect x="100" y="0" width="10" height="10" fill="currentColor" />
      <rect x="130" y="0" width="10" height="10" fill="currentColor" />
      <rect x="110" y="10" width="10" height="10" fill="currentColor" />
      <rect x="120" y="10" width="10" height="10" fill="currentColor" />
      <rect x="115" y="20" width="10" height="10" fill="currentColor" />
      <rect x="115" y="30" width="10" height="10" fill="currentColor" />
    </svg>
  )
}

export default JayLogo
