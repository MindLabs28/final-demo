import { motion } from "framer-motion"
import React from "react"

const SlideIn = ({
  children,
  side,
  className,
}: {
  children: React.ReactNode
  side: "left" | "right"
  className?: string
}) => {
  return (
    <motion.section
      className={className}
      initial={{ x: side === "left" ? -100 : 100, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
        delayChildren: 0.3,
      }}
    >
      {children}
    </motion.section>
  )
}

export default SlideIn
