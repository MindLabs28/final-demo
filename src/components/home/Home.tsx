import Nav from "../Navbar/Nav"
import SlideIn from "../scroll components/SlideIn"
import Card from "../card/Card"
import Loading from "../Loading/Loading"
import { useEffect, useState } from "react"

const img = new Image()
const Home = () => {
  // const imgRef = useRef<HTMLImageElement>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      img.src = "https://github.com/pathikcomp/images/blob/main/bg.jpg?raw=true"
      img.onload = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setLoading(false)
      }
    })()
  }, [])
  return loading ? (
    <Loading />
  ) : (
    <main className="pt-[72px] bg-black">
      <Nav />
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
      <section
        className=" text-primary md:px-[5rem]"
        id="services"
      >
        <SlideIn side="left">
          <h2 className="font-bold text-5xl pt-5 pb-[2.5rem]">Our Services:</h2>
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
            src="https://github.com/pathikcomp/images/blob/main/water.jpeg?raw=true"
            title="Hot Water Supply"
            className="object-[70%,50%]"
            description="we supply hot water through our trucks"
          />
          <Card
            src="https://github.com/pathikcomp/images/blob/main/IMG-20240421-WA0008.jpg?raw=true"
            title="Commercial Cleaning"
            className="object-[0%,100%]"
            description="cleaning any commercial spaces"
          />
        </div>
      </section>
      <section className="mt-5 md:px-[5rem]">
        <SlideIn side="left">
          <h2 className="text-primary font-bold text-5xl pt-5 pb-[2.5rem]">
            Contact Us:
          </h2>
        </SlideIn>
      </section>
    </main>
  )
}

export default Home
