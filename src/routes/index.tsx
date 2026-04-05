import { StickyAnimationWrapper } from "@/components/animations/sticky-animation-wrapper"
import { Container } from "@/components/container"
import { Corners } from "@/components/some-core/corners"
import DashedGridRectangle from "@/components/some-core/DashedGridRectangle"
import JayLogo from "@/components/some-core/JayLogo"
import ThemeToggle from "@/components/some-core/toggle-theme"
import { Button } from "@/components/ui/button"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <LowerHeader />
      <Container>
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="font-medium">Project ready!</h1>
            <p>You may now add components and start building.</p>
            <p>We&apos;ve already added the button component for you.</p>
            <Button className="mt-2">Button</Button>
          </div>
        </div>
      </Container>
      <section className="relative w-full border-y border-border">
        <Container innerClassName="relative">
          <Corners />
          <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
            <div>
              <h2 className="font-medium">Project ready!</h2>
              <p>You may now add components and start building.</p>
              <p>We&apos;ve already added the button component for you.</p>
              <Button className="mt-2">Button</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

const LowerHeader = () => {
  return (
    <section className="h-fit w-full border-y border-border">
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

const Navbar = () => {
  return (
    <section className="navigation h-16 w-full">
      <Container className="relative h-full">
        <ThemeToggle />
      </Container>
    </section>
  )
}
