import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Corners } from "./corners"
import { useSound } from "@/hooks/use-sound"
import { bookOpenSound } from "@/lib/book-open"

const PROJECTS = {
  own: [
    {
      title: "DevStack",
      date: "03.2024 - ∞",
      link: "https://devstack.radiumcoders.com",
      description: "STEAL THE EXACT STACKS REAL DEVELOPERS USE TO SCALE",
    },
    {
      title: "Yaos",
      date: "01.2025 - ∞",
      link: "https://yaos.vercel.app",
      description:
        "Yet Another Open Source, a cultated collection of open-source projects.",
    },
  ],
  redesign: [
    {
      title: "Rizi Redesign",
      date: "01.2022 - ∞",
      link: "https://rizitui.vercel.app/",
      description:
        "Redesigned website for the new emerging typescript tui framework called rizi TUI",
    },
    {
      title: "NeetCode Redesign",
      date: "01.2022 - ∞",
      link: "https://neet-code-challange.vercel.app/",
      description:
        "Redesigned website for the NeetCode platform have a minimal look and overall polished vibe.",
    },
  ],
  opensource: [
    {
      title: "Mellow Lines",
      date: "05.2023 - Present",
      link: "https://mellowlines.dev/?utm_source=radiumcoders.com",
      description:
        "Transform Code into Motion Create stunning, cinematic code walkthroughs in seconds. The ultimate free and open source tool for developers, content creators and educators.",
    },
  ],
}

export interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Projects({ className, ...props }: ProjectProps) {
  const [play] = useSound(bookOpenSound)
  const renderList = (items: typeof PROJECTS.own) => (
    <div className="relative w-full">
      <Corners />
      <Accordion className="rounded-none border-border bg-background">
        {items.map((project, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="border-border px-4 transition-colors hover:bg-muted/20 data-open:bg-muted/10"
          >
            <AccordionTrigger
              onClick={() => play()}
              className="px-0 py-4 hover:no-underline"
            >
              <div className="flex w-full items-center justify-between gap-4">
                <span className="text-sm font-medium text-foreground">
                  {project.title}
                </span>
                <span className="mr-4 font-mono text-xs text-muted-foreground/60">
                  {project.date}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-0 pb-4">
              <div className="text-muted-foreground">
                <p>{project.description}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-foreground transition-colors hover:underline"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )

  return (
    <div className={cn("flex w-full flex-col gap-10", className)} {...props}>
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-lg font-medium text-foreground">Own Projects</h2>
        {renderList(PROJECTS.own)}
      </div>

      <div className="flex w-full flex-col gap-4">
        <h2 className="text-lg font-medium text-foreground">Redesigns</h2>
        {renderList(PROJECTS.redesign)}
      </div>

      <div className="flex w-full flex-col gap-4">
        <h2 className="text-lg font-medium text-foreground">
          Open Source Contributor
        </h2>
        {renderList(PROJECTS.opensource)}
      </div>
    </div>
  )
}

export default Projects
