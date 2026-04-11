import { Container } from "@/components/container"
import JayLogo from "@/components/some-core/JayLogo"
import ThemeToggle from "@/components/some-core/toggle-theme"
import { Link } from "@tanstack/react-router"

const NAV_LINKS = [
  { name: "Projects", to: "/", hash: "projects", scrollId: "projects" },
  { name: "Blogs", to: "/blogs" },
]

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <Container
        className="bg-transparent"
        innerClassName="flex h-14 items-center justify-between pl-4 pr-0 sm:pl-6"
      >
        <div className="flex h-full items-center gap-4 sm:gap-6">
          <Link
            viewTransition
            to="/"
          >
            <JayLogo className="size-12 sm:size-16" />
          </Link>
        </div>

        <div className="ml-auto flex h-full items-center">
          <nav className="hidden h-full items-center text-sm font-medium md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.to as any}
                hash={link.hash}
                viewTransition
                onClick={() => {
                  if (link.scrollId) {
                    document
                      .getElementById(link.scrollId)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="group relative flex h-full items-center justify-center overflow-hidden border-l border-border px-6 text-muted-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                <span className="absolute inset-0 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)] group-hover:translate-y-0" />
                <span className="relative z-10 transition-colors delay-100 group-hover:text-background">
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="group relative flex h-full w-14 items-center justify-center overflow-hidden border-l border-border text-muted-foreground transition-colors">
            <span className="absolute inset-0 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)] group-hover:translate-y-0" />
            <div className="relative z-10 flex size-full items-center justify-center transition-colors delay-100 **:text-inherit group-hover:text-background [&_button]:bg-transparent! [&_button]:hover:bg-transparent! [&_svg]:text-current!">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
