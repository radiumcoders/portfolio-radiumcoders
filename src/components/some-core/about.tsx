import * as React from "react"
import { cn } from "@/lib/utils"
import { Corners } from "./corners"

export interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {}

export function About({ className, ...props }: AboutProps) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col border border-border bg-background",
        className
      )}
      {...props}
    >
      <Corners />
      <div className="border-b border-border p-4 sm:p-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          About
        </h2>
      </div>

      <div className="p-4 sm:p-6">
        <ul className="flex flex-col gap-4 font-mono text-[13px] text-foreground sm:text-sm">
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
    <li className="flex items-start gap-3 sm:gap-4">
      <span className="mt-1.75 size-1.5 shrink-0 rounded-full bg-muted-foreground/30" />
      <div className="leading-relaxed">{children}</div>
    </li>
  )
}

export default About
