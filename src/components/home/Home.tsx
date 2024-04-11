import Nav from "../Navbar/Nav"
import SlideIn from "../scroll components/SlideIn"

const Home = () => {
  return (
    <main className="pt-[72px]">
      <Nav />
      <div className="bg-mainBg h-screen bg-no-repeat bg-cover bg-center  relative isolate ">
        <div className="absolute inset-0 bg-[rgb(0,0,0,0.4)] z-[-1] flex flex-col" />
        {/* <div className="pl-7 pt-10"> */}
        <SlideIn
          side="left"
          className="space-y-5 pl-[2rem] md:pl-[7rem] relative top-[10%] sm:top-[7%] lg:top-[25%]"
        >
          <h3 className="text-[yellow] text-xl font-bold">
            27 hours 7 days a week availability
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
      {/* </div> */}
    </main>
  )
}

export default Home
