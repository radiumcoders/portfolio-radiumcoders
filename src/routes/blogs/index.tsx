import { Container } from "@/components/container"
import { Navbar } from "@/components/some-core/navbar"
import { PatternSeparator } from "@/components/some-core/pattern-separator"
import { createFileRoute, Link } from "@tanstack/react-router"
import { allBlogs } from "content-collections"

export const Route = createFileRoute("/blogs/")({
  component: RouteComponent,
  loader: () => allBlogs,
})

function RouteComponent() {
  const blogs = Route.useLoaderData()

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Container innerClassName="py-12 text-primary">
        <div className="w-full">
          <div className="mb-10">
            <h1 className="text-4xl font-bold tracking-tight">Blogs</h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Thoughts, notes, and updates from the things I am building and
              learning.
            </p>
          </div>

          <div className="space-y-6">
            {blogs.map((blog) => (
              <article
                key={blog._meta.path}
                className="rounded-xl border border-border bg-background/50 p-5 transition-colors hover:bg-background"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight">
                        <Link
                          to="/blogs/$id"
                          params={{ id: blog._meta.path }}
                          className="hover:underline"
                          viewTransition
                        >
                          {blog.title}
                        </Link>
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {blog.summary}
                      </p>
                    </div>

                    <time className="shrink-0 text-sm text-muted-foreground">
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <div>
                    <Link
                      to="/blogs/$id"
                      params={{ id: blog._meta.path }}
                      className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                      viewTransition
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {blogs.length === 0 ? (
            <p className="mt-8 text-sm text-muted-foreground">
              No blog posts found yet.
            </p>
          ) : null}
        </div>
      </Container>
      <PatternSeparator />
    </main>
  )
}
