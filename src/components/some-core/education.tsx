import * as React from "react"
import { cn } from "@/lib/utils"

const EDUCATION = [
  {
    degree: "Senior Secondary Education",
    school: "Ideal Internation School, Indore",
    year: "will complete in 2027",
  },
]

export interface EducationProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Education({ className, ...props }: EducationProps) {
  return (
    <div className={cn("flex w-full flex-col gap-6", className)} {...props}>
      {EDUCATION.map((edu, idx) => (
        <div
          key={idx}
          className="flex flex-col items-start justify-between gap-1.5 sm:flex-row sm:items-start"
        >
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-foreground">
              {edu.degree}
            </span>
            <span className="text-sm text-muted-foreground">{edu.school}</span>
          </div>
          <div className="mt-1 font-mono text-[11px] text-muted-foreground/50 sm:mt-0 sm:text-right">
            {edu.year}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Education
