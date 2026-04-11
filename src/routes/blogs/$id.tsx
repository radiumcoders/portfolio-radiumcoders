import { Container } from "@/components/container"
import { Navbar } from "@/components/some-core/navbar"
import { PatternSeparator } from "@/components/some-core/pattern-separator"
import { cn } from "@/lib/utils"
import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { allBlogs } from "content-collections"

export const Route = createFileRoute("/blogs/$id")({
  component: RouteComponent,
  loader: ({ params }) => {
    const blog = allBlogs.find((post) => post._meta.path === params.id)
    if (!blog) {
      throw notFound()
    }
    return blog
  },
  notFoundComponent: () => {
    return (
      <main className="min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <Container innerClassName="py-12 text-primary">
          <div className="flex flex-col items-center justify-center space-y-4 text-center w-full">
            <h1 className="text-4xl font-bold">Post not found</h1>
            <p className="text-muted-foreground">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              viewTransition
              to="/blogs"
              className="text-primary underline-offset-4 hover:underline"
            >
              ← Back to blogs
            </Link>
          </div>
        </Container>
        <PatternSeparator />
      </main>
    )
  },
})

function RouteComponent() {
  const blog = Route.useLoaderData()

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Container
        innerClassName="py-12 text-primary"
      >
        <div className="w-full">
          <div className="mb-8">
            <Link
              viewTransition
              to="/blogs"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              ← Back to blogs
            </Link>
          </div>

          <article className="w-full">
            <header className="mb-10 block">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                {blog.title}
              </h1>
              <time className="mt-4 block text-sm text-muted-foreground">
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </header>

            <div
              className={cn(
                "prose prose-neutral dark:prose-invert max-w-none",
                // Typography
                "[&>h1]:mt-8 [&>h1]:mb-4 [&>h1]:text-3xl [&>h1]:font-bold",
                "[&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:border-b [&>h2]:pb-2 [&>h2]:text-2xl [&>h2]:font-semibold",
                "[&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold",
                "[&>p]:mb-6 [&>p]:leading-7",
                // Links and Blockquotes
                "[&>a]:text-primary [&>a]:underline [&>a]:underline-offset-4",
                "[&>blockquote]:mt-6 [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:text-muted-foreground [&>blockquote]:italic",
                // Lists
                "[&>ol]:my-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:mt-2",
                "[&>ul]:my-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mt-2",
                // Inline Code
                "[&_code:not(pre_code)]:rounded [&_code:not(pre_code)]:bg-muted [&_code:not(pre_code)]:px-1.5 [&_code:not(pre_code)]:py-0.5 [&_code:not(pre_code)]:font-mono [&_code:not(pre_code)]:text-sm",
                // Standard Preformatted Text
                "[&>pre]:mt-6 [&>pre]:mb-6 [&>pre]:overflow-x-auto [&>pre]:rounded-xl [&>pre]:border [&>pre]:border-border [&>pre]:p-6 [&>pre]:text-sm [&>pre]:leading-relaxed",
                // Rehype Pretty Code Figures
                "[&_figure]:my-6 [&_figure_code]:bg-transparent [&_figure_code]:p-0 [&_figure_pre]:overflow-x-auto [&_figure_pre]:rounded-xl [&_figure_pre]:border [&_figure_pre]:border-border [&_figure_pre]:p-6 [&_figure_pre]:text-sm [&_figure_pre]:leading-relaxed [&_figure_span.line]:px-4"
              )}
              dangerouslySetInnerHTML={{ __html: blog.html }}
            />
          </article>
        </div>
      </Container>
      <PatternSeparator />
    </main>
  )
}
