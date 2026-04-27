import * as React from "react"
import { cn } from "@/lib/utils"

export interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {}

export function About({ className, ...props }: AboutProps) {
  return (
    <div
      className={cn("flex w-full flex-col bg-background", className)}
      {...props}
    >
      <div className="px-4 pt-4 pb-2 sm:px-6 sm:pt-5 sm:pb-2">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          About
        </h2>
      </div>

      <div className="px-4 pb-4 sm:px-6 sm:pb-5">
        <ul className="flex flex-col gap-3 font-mono text-[13px] text-foreground sm:text-sm">
          <ListItem>
            Design Engineer and Backend Developer with 1+ years of experience,
            known for pixel-perfect execution and strong attention to small
            details. With a Minimal and Beautiful taste.
          </ListItem>

          <ListItem>
            Skilled in Next.js , Tanstack Start, React, TypeScript, and modern
            front-end technologies; building high-quality, user-centric web and
            mobile applications.
          </ListItem>

          <ListItem>
            Passionate about exploring new technologies and turning ideas into
            reality through polished, thoughtfully crafted personal projects.
          </ListItem>
        </ul>
      </div>
    </div>
  )
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1.75 size-1.5 shrink-0 rounded-full bg-muted-foreground/30" />
      <div className="leading-relaxed">{children}</div>
    </li>
  )
}

export default About
