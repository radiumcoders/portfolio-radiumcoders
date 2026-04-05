import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const TECH_STACK = [
  {
    name: "Next.js",
    iconLight: "/tech-stack/nextjs2-light.svg",
    iconDark: "/tech-stack/nextjs2-dark.svg",
  },
  { name: "React", icon: "/tech-stack/react.svg" },
  { name: "TypeScript", icon: "/tech-stack/typescript.svg" },
  { name: "JavaScript", icon: "/tech-stack/js.svg" },
  { name: "Tailwind CSS", icon: "/tech-stack/tailwindcss.svg" },
  { name: "Node.js", icon: "/tech-stack/nodejs.svg" },
  { name: "Bun", icon: "/tech-stack/bun.svg" },
  { name: "Motion", icon: "/tech-stack/motion.svg" },
  {
    name: "Radix UI",
    iconLight: "/tech-stack/radixui-light.svg",
    iconDark: "/tech-stack/radixui-dark.svg",
  },
  {
    name: "TanStack",
    iconLight: "/tech-stack/tanstack-light.svg",
    iconDark: "/tech-stack/tanstack-dark.svg",
  },
  {
    name: "Base UI",
    iconLight: "/tech-stack/base-ui-light.svg",
    iconDark: "/tech-stack/base-ui-dark.svg",
  },
  { name: "Git", icon: "/tech-stack/git.svg" },
  {
    name: "GitHub Copilot",
    iconLight: "/tech-stack/github-copilot-icon.webp",
    iconDark: "/tech-stack/github-copilot-white-icon.webp",
  },
  {
    name: "Zed",
    iconLight: "/tech-stack/zed-logo light.svg",
    iconDark: "/tech-stack/zed-logo.svg",
  },
]

export interface TechStackProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TechStack({ className, ...props }: TechStackProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2",
        className
      )}
      {...props}
    >
      {TECH_STACK.map((tech) => (
        <Button key={tech.name} variant="outline" className="gap-2">
          {tech.icon ? (
            <img
              src={tech.icon}
              alt={tech.name}
              className="size-4 object-contain"
            />
          ) : (
            <>
              <img
                src={tech.iconLight}
                alt={tech.name}
                className="size-4 object-contain dark:hidden"
              />
              <img
                src={tech.iconDark}
                alt={tech.name}
                className="hidden size-4 object-contain dark:block"
              />
            </>
          )}
          <span>{tech.name}</span>
        </Button>
      ))}
    </div>
  )
}

export default TechStack
