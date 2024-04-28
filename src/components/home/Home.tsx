import Nav from "../Navbar/Nav"
import SlideIn from "../scroll components/SlideIn"
import Card from "../card/Card"
import Loading from "../Loading/Loading"
import { useEffect, useRef, useState } from "react"
import { FaPeopleGroup } from "react-icons/fa6"
import { LuHeartHandshake } from "react-icons/lu"
import { TbClock24 } from "react-icons/tb"
import { MdRocketLaunch } from "react-icons/md"
import FadeIn from "../scroll components/FadeIn"
import { FiPhoneCall } from "react-icons/fi"
import { CgMail } from "react-icons/cg"
import { motion } from "framer-motion"

const img = new Image()
const Home = () => {
  const [loading, setLoading] = useState(true)
  const servicesRef = useRef<HTMLDivElement>(null)
  const contactUsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ;(async () => {
      img.src = "https://github.com/pathikcomp/images/blob/main/bg.jpg?raw=true"
      img.onload = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setLoading(false)
      }
    })()
  }, [])

  const handleScroll = (id: "services" | "contactUs") => {
    if (id === "services" && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" })
    } else if (contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }
  return loading ? (
    <Loading />
  ) : (
    <main className="pt-[72px] bg-black">
      <Nav handleScroll={handleScroll} />
      <div className="bg-mainBg h-screen bg-no-repeat bg-cover bg-center  relative isolate flex flex-col">
        <div className="absolute inset-0 bg-[rgb(0,0,0,0.4)] z-[-1] " />

        {/* <div className="pl-7 pt-10"> */}
        <SlideIn
          side="left"
          className="space-y-5 pl-[2rem] md:pl-[7rem] relative top-[10%] sm:top-[7%] lg:top-[25%]"
        >
          <h3 className="text-[yellow] text-xl font-bold">
            24 hours 7 days a week availability
          </h3>
          <h2 className="text-white text-4xl font-bold">
            Big Or Small... We Do It All
          </h2>
          <h4 className="text-white font-bold text-lg max-w-[50rem]">
            Our mission is to exceed expectations, providing reliable,
            eco-friendly cleaning solutions for homes and businesses alike. Our
            dedicated team is driven by a passion for cleanliness, striving to
            create healthier and happier environments for our clients.
          </h4>
          <button className="bg-secondary text-white font-bold px-4 rounded-lg py-2 hover:bg-primary hover:text-[yellow] transition-colors duration-300">
            Get Started
          </button>
        </SlideIn>
      </div>
      <div
        className=" text-white md:px-[5rem]"
        id="services"
        ref={servicesRef}
      >
        <SlideIn side="left">
          <h2 className="font-bold text-4xl pt-5 pb-[2.5rem] uppercase">
            Our Services
          </h2>
        </SlideIn>
        <div className=" flex flex-wrap gap-8 justify-center">
          <Card
            src="https://github.com/pathikcomp/images/blob/main/truck-2.jpg?raw=true"
            title="Fleet Trucks"
            description="Washing Trucks And Trailers"
          />
          <Card
            src="https://github.com/pathikcomp/images/blob/main/park.jpg?raw=true"
            title="Gas Station Canopy & Car Wash"
            description="Washing Car,Glass Windows,Canopy And Car Wash Area"
          />
          <Card
            src="https://github.com/pathikcomp/images/blob/main/IMG-20240416-WA0000.jpg?raw=true"
            title="Parking And UnderGround"
            description="Washing Park Area Dirt Of UnderGround Area & Wash Parking Area"
          />
          <Card
            src="https://github.com/pathikcomp/images/blob/main/store.jpg?raw=true"
            title="Store Front"
            className="object-[right,center]"
            description="cleaning store font area of any store"
          />
          <Card
            src="https://github.com/pathikcomp/images/blob/main/house-1.jpg?raw=true"
            title="Residential Cleaning"
            // className="object-[right,center]"
            description="cleaning any residential buildings"
          />
          <Card
            src="https://github.com/pathikcomp/images/blob/main/graffiti-removal-1.jpg?raw=true"
            title="Graffiti Removal"
            className="object-[25%,50%]"
            description="removing spray paints from any wall"
          />
          <Card
            src="https://github.com/pathikcomp/images/blob/main/2147632830.jpg?raw=true"
            title="Hot Water Supply"
            className="object-[70%,50%]"
            description="we supply hot water through our trucks"
          />
          <Card
            src="https://github.com/pathikcomp/images/blob/main/2150454565.jpg?raw=true"
            title="Commercial Cleaning"
            className="object-[0%,100%]"
            description="cleaning any commercial spaces"
          />
        </div>
      </div>
      <div
        className="mt-5 md:px-[5rem]  text-white relative isolate pb-10"
        ref={contactUsRef}
      >
        <img
          src="https://github.com/pathikcomp/images/blob/main/2150454565.jpg?raw=true"
          className="absolute inset-0 z-[-2] h-full object-cover w-full"
        />
        <div className="z-[-1] bg-[rgba(0,0,0,0.54)] absolute inset-0" />
        <SlideIn side="left">
          <h2 className="font-bold text-4xl pt-5 pb-[0.7rem] uppercase text-center text-white">
            why choose Us ?
          </h2>
        </SlideIn>
        <FadeIn from="top">
          <h3 className="text-3xl text-center pb-[0.7rem] text-[yellow] font-semibold">
            20+ Years of Superior Cleaning
          </h3>
        </FadeIn>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.4, bounce: 0, duration: 0.5 }}
        >
          <h4 className="text-center pb-[2rem] italic text-lg ">
            Trust our company for cleaning and washing services because of our
            commitment to customer satisfaction, backed by years of expertise
            and a proven track record.
          </h4>
        </motion.div>
        <section className="flex justify-center gap-7 flex-wrap lg:gap-[4rem]">
          <div className="flex justify-center flex-col items-center gap-1">
            <FaPeopleGroup className="text-white text-[5rem] bg-primary rounded-full p-4" />
            <h3 className=" text-lg font-semibold">Expert Employees</h3>
          </div>
          <div className="flex justify-center flex-col items-center gap-1">
            <LuHeartHandshake className="text-white text-[5rem] bg-red-500 rounded-full p-4" />
            <h3 className="text-lg font-semibold">Customers Satisfaction</h3>
          </div>
          <div className="flex justify-center flex-col items-center gap-1">
            <TbClock24 className="text-white text-[5rem] bg-secondary rounded-full p-4" />
            <h3 className="text-lg font-semibold">24&#215;7 Services</h3>
          </div>
          <div className="flex justify-center flex-col items-center gap-1">
            <MdRocketLaunch className="text-white text-[5rem] bg-[rgb(20,184,166)] rounded-full p-[1.2rem]" />
            <h3 className="text-lg font-semibold">Customers Satisfaction</h3>
          </div>
        </section>
      </div>
      <div
        className="mt-5 md:px-[5rem] pb-8"
        ref={contactUsRef}
      >
        <SlideIn side="left">
          <h2 className="text-white font-bold text-2xl pt-5 pb-[1.5rem] uppercase">
            Contact Us
          </h2>
        </SlideIn>
        <section className="space-y-2">
          <div
            className="text-white flex text-[1rem] items-center"
            onClick={() => {
              window.location.href = "tel:+1(905)783-7848"
            }}
          >
            <FiPhoneCall className="mr-3" /> +1 (905) 783-7848
          </div>
          <div
            className="text-white flex text-[1rem] items-center"
            onClick={() => {
              window.location.href = "mailto:mindlabs28@gmail.com"
            }}
          >
            <CgMail className="mr-3 text-lg" /> mindlabs28@gmail.com
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
