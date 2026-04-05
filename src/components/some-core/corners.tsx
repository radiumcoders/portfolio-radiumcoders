export function Corners() {
  return (
    <>
      <div className="absolute -top-1 -left-1 z-10 h-2 w-2 rotate-45 rounded-xs border border-border bg-background" />
      <div className="absolute -top-1 -right-1 z-10 h-2 w-2 rotate-45 rounded-xs border border-border bg-background" />
      <div className="absolute -bottom-1 -left-1 z-10 h-2 w-2 rotate-45 rounded-xs border border-border bg-background" />
      <div className="absolute -right-1 -bottom-1 z-10 h-2 w-2 rotate-45 rounded-xs border border-border bg-background" />
    </>
  )
}
