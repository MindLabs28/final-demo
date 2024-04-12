import React from "react"
import { motion } from "framer-motion"

const FadeIn = ({
  children,
  from,
  className,
}: {
  children: React.ReactNode
  from: "top" | "bottom"
  className?: string
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: from === "top" ? -60 : 60 }}
      whileInView={{ opacity: 1, y: 0 }}
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

export default FadeIn
