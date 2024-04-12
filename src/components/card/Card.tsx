import React from "react"
import FadeIn from "../scroll components/FadeIn"

const Card = ({
  src,
  title,
  children,
}: {
  src: string
  title: string
  children: React.ReactNode
}) => {
  return (
    <div className="rounded-xl flex gap-[15rem]">
      <img
        src={src}
        alt="not-found"
        className=" object-cover  rounded-lg  w-[12rem] aspect-[12/15]"
      />
      <FadeIn
        from="top"
        className="flex-1"
      >
        <h3 className="text-purple-400 font-bold text-3xl">{title}</h3>
        {children}
      </FadeIn>
    </div>
  )
}

export default Card
