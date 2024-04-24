import { motion } from "framer-motion"
import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material"

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
  />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(248 113 113 / 1) ",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "rgb(248 113 113 / 1)",
  },
}))

const Card = ({
  src,
  title,
  className,
  description,
}: {
  src: string
  title: string
  className?: string
  description: string
}) => {
  return (
    <StyledTooltip
      title={
        <p className="font-bold text-[0.8rem] capitalize">{description}</p>
      }
      arrow
      placement="top"
    >
      <motion.div
        className="w-[14rem] space-y-5 relative cursor-pointer"
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
        }}
        transition={{ delay: 0.1 }}
        whileHover={"show"}
        whileTap={"show"}
      >
        {/* <motion.div
        className="bg-red-400 rounded-lg absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-1.5rem] shadow-2xl px-5 font-bold max-w-[14rem] text-white"
        initial={{ opacity: 0 }}
        variants={{
          show: {
            opacity: 1,
          },
        }}
      >
        {description}
        <div
          style={{
            clipPath: "path('m 0 0 c 10 12 4 12 15 0')",
          }}
          className="aspect-square h-[15px] bg-red-400 absolute top-[95%] left-[50%] translate-x-[-50%]"
        />
      </motion.div> */}

        <img
          src={src}
          className={`w-full aspect-[10/14] object-cover object-top rounded-xl ${className}`}
        />
        <h3 className="text-white font-bold text-center ">{title}</h3>
      </motion.div>
    </StyledTooltip>
  )
}

export default Card
