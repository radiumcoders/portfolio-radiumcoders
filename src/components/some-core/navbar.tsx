import { Container } from "@/components/container"
import JayLogo from "@/components/some-core/JayLogo"
import ThemeToggle from "@/components/some-core/toggle-theme"
import { Separator } from "@/components/ui/separator"
import { Link } from "@tanstack/react-router"

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <Container
        className="bg-transparent"
        innerClassName="flex h-14 items-center justify-between pl-4 pr-0 sm:pl-6"
      >
        <div className="flex h-full items-center gap-4 sm:gap-6">
          <JayLogo className="size-12 sm:size-16" />
        </div>
        <nav className="hidden h-full items-center space-x-4 text-sm font-medium sm:space-x-6 md:flex">
          <Link
            to="/"
            hash="projects"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Projects
          </Link>
          <Link
            to="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Blogs
          </Link>
          <Link
            to="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Components
          </Link>
        </nav>
        <div className="flex h-full items-center">
          <Separator orientation="vertical" className="h-full" />
          <div className="flex h-full w-14 items-center justify-center">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}
