import { cn } from "@/lib/utils"

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={cn(
        `border-x border-border bg-background text-foreground`,
        className
      )}
    >
      <div className="mx-auto flex min-h-full w-full max-w-3xl border-x border-border px-4">
        {children}
      </div>
    </section>
  )
}
