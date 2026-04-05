import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import SegmentedNav from "@/components/SegmentedNav"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <>
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
      <Container className="max-h-fit">
        <SegmentedNav
          onItemChange={(item) => console.log(`Selected: ${item}`)}
        />
      </Container>
    </>
  )
}
