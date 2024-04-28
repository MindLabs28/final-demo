import { motion } from "framer-motion"
import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material"

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
  />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "dodgerblue",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "dodgerblue",
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
        className="w-[16rem] space-y-5 relative cursor-pointer"
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
        }}
        transition={{ delay: 0.1 }}
        whileHover={"show"}
      >
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
