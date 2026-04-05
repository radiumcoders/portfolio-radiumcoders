import * as React from "react"
import { cn } from "@/lib/utils"

const EXPERIENCE = [
  {
    role: "Frontend Engineer",
    company: "Company Name",
    year: "2022 - Present",
    description: "Built and maintained the core frontend architecture using React, TypeScript, and Tailwind CSS.",
  },
  {
    role: "Web Developer",
    company: "Another Company",
    year: "2020 - 2022",
    description: "Developed responsive web applications and collaborated with cross-functional teams to deliver high-quality products.",
  },
]

export interface ExperienceProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Experience({ className, ...props }: ExperienceProps) {
  return (
    <div className={cn("flex w-full flex-col gap-8", className)} {...props}>
      {EXPERIENCE.map((exp, idx) => (
        <div
          key={idx}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start"
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-foreground">
                {exp.role}
              </span>
              <span className="text-sm text-muted-foreground">
                {exp.company}
              </span>
            </div>
            <p className="max-w-lg text-sm text-muted-foreground/80">
              {exp.description}
            </p>
          </div>
          <div className="mt-1 font-mono text-[11px] text-muted-foreground/50 sm:mt-0 sm:text-right shrink-0">
            {exp.year}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experience
