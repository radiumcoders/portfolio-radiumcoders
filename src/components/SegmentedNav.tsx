import * as React from "react"
import { cn } from "../lib/utils"

export interface SegmentedNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: string[]
  activeItem?: string
  onItemChange?: (item: string) => void
}

export function SegmentedNav({
  items = ["Projects", "Gallery", "Studio", "Profile"],
  activeItem,
  onItemChange,
  className,
  ...props
}: SegmentedNavProps) {
  const [internalActive, setInternalActive] = React.useState(items[0])

  // Allow for both controlled and uncontrolled usage
  const active = activeItem !== undefined ? activeItem : internalActive

  const handleItemClick = (item: string) => {
    setInternalActive(item)
    if (onItemChange) {
      onItemChange(item)
    }
  }

  return (
    <div
      className={cn(
        "relative inline-flex h-fit items-center rounded-full border border-[#333]/50 bg-[#1a1a1a] p-1.5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.05)]",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 rounded-full border border-black/60" />

      {items.map((item) => {
        const isActive = active === item
        return (
          <button
            key={item}
            onClick={() => handleItemClick(item)}
            className={cn(
              "relative z-10 rounded-full px-6 py-2 text-[15px] font-medium transition-all duration-300 outline-none select-none",
              isActive
                ? "bg-gradient-to-b from-[#ebebeb] via-[#d6d6d6] to-[#adadad] text-black shadow-[0_4px_8px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_1px_rgba(0,0,0,0.1)]"
                : "text-neutral-300 hover:text-white"
            )}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

export default SegmentedNav
