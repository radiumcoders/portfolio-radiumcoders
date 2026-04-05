import { motion } from "motion/react"
import { useState } from "react"

export const StickyAnimationWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const onMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect()
    const y = clientY - (top + height / 2)
    const x = clientX - (left + width / 2)
    setPosition({ x, y })
  }
  const onMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }
  return (
    <motion.div
      className="h-fit w-fit"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 30, mass: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
