import src from "../../assets/logo.svg"
import { motion } from "framer-motion"

const Loading = () => {
  return (
    <div className="h-screen w-screen bg-primary flex justify-center items-center flex-col gap-5">
      <img
        src={src}
        alt="logo"
        className="border-solid border-white border-[4px] rounded-xl"
      />
      <div className="flex gap-4">
        <Dot />
        <Dot delay={0.3} />
        <Dot delay={0.6} />
      </div>
    </div>
  )
}

export default Loading

const Dot = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.p
      className="h-4 aspect-square rounded-full bg-white"
      animate={{
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 0.9,
        repeat: Infinity,
        delay: delay,
        repeatDelay:0.3
      }}
    />
  )
}
