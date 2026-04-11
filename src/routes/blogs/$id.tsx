import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blogs/$id"!</div>
}
