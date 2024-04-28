import { useState } from "react"
import src from "../../assets/logo.svg"
import { motion } from "framer-motion"

import { Drawer } from "@mui/material"

const Nav = ({
  handleScroll,
}: {
  handleScroll: (id: "services" | "contactUs") => void
}) => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-gradient-to-r from-primary to-purple-400 py-2 flex justify-between items-center lg:px-20 fixed top-0 w-full z-20">
      <div className="flex items-center gap-2">
        <motion.div
          whileInView={"show"}
          transition={{
            staggerChildren: 0.1,
            staggerDirection: -1,
          }}
          className="flex h-full items-center"
        >
          <motion.img
            src={src}
            alt="logo"
            className="h-[3.5rem] aspect-square "
            initial={{
              opacity: 0,
              x: 50,
            }}
            variants={{
              show: {
                opacity: 1,
                x: 0,
              },
            }}
          />
          <motion.p
            className="w-1 bg-white h-[3rem] mr-2"
            initial={{
              scaleY: 0,
            }}
            variants={{
              show: {
                scaleY: 1,
              },
            }}
            transition={{
              duration: 0.3,
            }}
          />
          {"Rise N Shine".split("").map((i, num) =>
            i === " " ? (
              <p
                className="inline-block w-2 "
                key={`logo-popup-${num}`}
              />
            ) : (
              <motion.p
                className="inline-block text-white text-3xl font-bold italic"
                key={`logo-popup-${num}`}
                initial={{
                  scale: 0,
                  y: 20,
                }}
                variants={{
                  show: {
                    scale: 1,
                    y: 0,
                  },
                }}
              >
                {i}
              </motion.p>
            )
          )}
        </motion.div>
      </div>
      <div className="gap-3 pr-3 hidden md:flex">
        <LinkBtn
          title="Services"
          handleScroll={() => {
            handleScroll("services")
          }}
        />
        <LinkBtn
          title="Contact Us"
          handleScroll={() => {
            handleScroll("contactUs")
          }}
        />
      </div>
      <button
        className="md:hidden pr-5"
        onClick={() => {
          setOpen(true)
        }}
      >
        <svg
          height={25}
          width={30}
        >
          <line
            x1={5}
            x2={24}
            y1={7}
            y2={7}
            stroke="white"
            strokeWidth={4}
            strokeLinecap="round"
          />
          <line
            x1={5}
            x2={17}
            y1={18}
            y2={18}
            stroke="white"
            strokeWidth={4}
            strokeLinecap="round"
          />
        </svg>
      </button>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        anchor="right"
      >
        <div className="w-[10rem]">
          <button
            className=" text-white bg-red-500 aspect-square rounded-full h-[20px] text-sm ml-auto mb-6 block relative top-3 right-4"
            onClick={() => {
              setOpen(false)
            }}
          >
            X
          </button>
          <section className="flex flex-col pt-5 items-center gap-3 mx-6">
            <button
              className="bg-purple-400 text-white px-3 rounded-md font-bold shadow-lg w-full text-center"
              onClick={() => {
                setOpen(false)
                handleScroll("services")
              }}
            >
              Services
            </button>
            <button
              className="bg-purple-400 text-white px-3 rounded-md font-bold shadow-lg w-full text-center"
              onClick={() => {
                setOpen(false)
                handleScroll("contactUs")
              }}
            >
              Contact Us
            </button>
          </section>
        </div>
      </Drawer>
    </nav>
  )
}

export default Nav

const LinkBtn = ({
  handleScroll,
  title,
}: {
  handleScroll: () => void
  title: string
}) => {
  return (
    <motion.div
      whileHover={"hover"}
      className="relative p-2  cursor-pointer isolate "
    >
      <button
        className="text-white font-bold "
        onClick={handleScroll}
      >
        {title}
      </button>
      <motion.span
        className="border-solid border-yellow-300 inset-0 top-0 left-0 border-b-4 absolute z-[-1]"
        initial={{
          scaleX: 0,
        }}
        variants={{
          hover: {
            scaleX: 1,
          },
        }}
      />
    </motion.div>
  )
}
