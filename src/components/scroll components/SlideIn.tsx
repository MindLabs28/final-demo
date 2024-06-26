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
        duration: 0.5,
        delay: 0.4,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  )
}

export default SlideIn
