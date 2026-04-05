import { Container } from "@/components/container"
import ThemeToggle from "@/components/toggle-theme"
import { Button } from "@/components/ui/button"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main className="min-h-screen w-full">
      <Container>
        <div className="flex gap-4">
          <ThemeToggle />
        </div>
      </Container>
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
    </main>
  )
}
