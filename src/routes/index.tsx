import { StickyAnimationWrapper } from "@/components/animations/sticky-animation-wrapper"
import { Container } from "@/components/container"
import { Corners } from "@/components/some-core/corners"
import DashedGridRectangle from "@/components/some-core/DashedGridRectangle"
import { GithubGraph } from "@/components/some-core/github-graph"
import JayLogo from "@/components/some-core/JayLogo"
import { Navbar } from "@/components/some-core/navbar"
import { PatternSeparator } from "@/components/some-core/pattern-separator"
import { TechStack } from "@/components/some-core/tech-stack"
import { Education } from "@/components/some-core/education"
import { createFileRoute } from "@tanstack/react-router"
import { Projects } from "@/components/some-core/projects"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <LowerHeader />
      <ProfileSection />
      <section className="h-fit w-full border-y border-b-0 border-border">
        <Container
          innerClassName="relative overflow-hidden py-8 flex flex-col items-center"
          className="h-full"
        >
          {/*<Corners />*/}
          <GithubGraph />
        </Container>
      </section>
      <PatternSeparator />
      <section className="w-full">
        <Container innerClassName="py-4 flex flex-col gap-4">
          <h1 className="text-2xl">Tech weaponry</h1>
          <TechStack />
        </Container>
      </section>
      <PatternSeparator />
      <section className="w-full border-b border-border">
        <Container innerClassName="py-4 flex flex-col gap-4">
          <h1 className="text-2xl">Education</h1>
          <Education />
        </Container>
      </section>
      <section id="projects" className="w-full">
        <Container innerClassName="py-4 flex flex-col gap-4">
          <h1 className="text-2xl">Projects</h1>
          <Projects />
        </Container>
      </section>
      <PatternSeparator />
    </main>
  )
}

const ProfileSection = () => {
  return (
    <Container innerClassName="flex flex-row p-0">
      <div className="relative flex shrink-0 items-center justify-center overflow-hidden border-t-0 border-r border-l-0 border-border bg-transparent p-4">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-30 dark:opacity-70"
          style={{
            backgroundImage: `
              linear-gradient(90deg, var(--border) 1px, transparent 1px),
              linear-gradient(180deg, var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px),
              linear-gradient(180deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
            backgroundPosition: "-5px -5px, -5px -5px, -5px -5px, -5px -5px",
          }}
        />
        <div className="relative z-10 size-24 overflow-hidden rounded-2xl border border-border bg-background p-1 sm:size-38">
          <img
            src="/profile.png"
            alt="Profile"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex h-full flex-col justify-end px-4 pt-6 pb-2 sm:px-6">
          <span className="block font-mono text-[10px] font-medium text-muted-foreground/40 sm:text-sm">
            text-3xl text-primary font-medium
          </span>
        </div>
        <div className="flex h-fit items-center gap-1.5 border-t border-border px-4 py-4 sm:px-6">
          <h1 className="h-fit text-xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Jay Sharma
          </h1>
          <svg
            className="h-6 w-6 text-blue-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex h-fit items-start justify-between border-t border-border px-4 py-2 font-mono text-[9px] font-medium text-muted-foreground/20 sm:px-6 sm:text-sm">
          <span>Open Source Contributor</span>
          <span>Design Engineer</span>
        </div>
      </div>
    </Container>
  )
}

const LowerHeader = () => {
  return (
    <section className="h-fit w-full border-b border-border">
      <Container innerClassName="relative px-0">
        <Corners />
        <DashedGridRectangle className="h-48 w-full p-0">
          <div className="flex h-full w-full items-center justify-center">
            <StickyAnimationWrapper>
              <JayLogo />
            </StickyAnimationWrapper>
          </div>
        </DashedGridRectangle>
      </Container>
    </section>
  )
}
