import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"
import { useEffect } from "react"

import appCss from "../styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "RadiumCoders",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === "d" &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName) &&
        !(e.target as HTMLElement).isContentEditable
      ) {
        const isDark = document.documentElement.classList.contains("dark")
        const nextMode = isDark ? "light" : "dark"

        const updateTheme = () => {
          document.documentElement.classList.remove("light", "dark")
          document.documentElement.classList.add(nextMode)
          document.documentElement.setAttribute("data-theme", nextMode)
          document.documentElement.style.colorScheme = nextMode
          window.localStorage.setItem("theme", nextMode)
          // Dispatch a custom event so the theme toggle button can sync its state
          window.dispatchEvent(new Event("theme-changed"))
        }

        if (!document.startViewTransition) {
          updateTheme()
        } else {
          document.startViewTransition(() => updateTheme())
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = window.localStorage.getItem("theme");
                  var mode = stored === "light" || stored === "dark" ? stored : "dark";
                  document.documentElement.classList.remove("light", "dark");
                  document.documentElement.classList.add(mode);
                  document.documentElement.setAttribute("data-theme", mode);
                  document.documentElement.style.colorScheme = mode;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-background text-primary">
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
