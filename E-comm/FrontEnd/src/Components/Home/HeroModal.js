import ReactDOM from "react-dom";

import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

const HeroModal = () => {
  return ReactDOM.createPortal(
    <>
      <div
        data-aos="fade-up"
        className="absolute md:top-80 top-52 inset-0 bg-transparent opacity-90  translate-y-80 p-8 flex flex-col gap-5 shadow-2xl shadow-pink-900  rounded-lg border-2  text-white md:max-w-lg    scale-90 text-center backdrop-filter backdrop-blur 
        mx-auto h-72
        "
      >
        <h1 className=" font-bold font-serif text-3xl text-yellow-400 text-opacity-100 ">
          {" "}
          <span className="text-white ">Music</span>{" "}
          <Typewriter
            options={{
              strings: "Harmony  Explore Our Melodic Oasis",
              autoStart: true,
              loop: true,
            }}
          />
        </h1>



      
        <Link to="mainSection" smooth={true} duration={500}>
        <button className="bg-black p-3 rounded-full w-[150px] mx-auto hover:scale-90 duration-300">
          Explore Now
        </button>
        </Link>
 


      </div>
    </>,
    document.getElementById("roots")
  );
};

export default HeroModal;
