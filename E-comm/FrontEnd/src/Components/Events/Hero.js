import ReactDOM from "react-dom";

import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeroModal = () => {
  const registered = useSelector((state)=>state.authSlice.registered);


    const navigate = useNavigate();
  return ReactDOM.createPortal(
    <>
      <div
        data-aos="fade-up"
        className="absolute md:top-80 top-52 inset-0 bg-transparent opacity-90  translate-y-80 p-8 flex flex-col gap-5 shadow-2xl shadow-pink-400  rounded-lg border-b-2  text-white md:max-w-lg    scale-90 text-center backdrop-filter  
        mx-auto h-72
        "
      >
        <h1 className="font-bold font-serif text-3xl text-yellow-400 text-opacity-100">
          <span className="text-white">Book</span>{" "}
          <Typewriter
            options={{
              strings: ["DJ", "Celebrity", "Live Singer"], // Array of strings to cycle through
              autoStart: true,
              loop: true,
            }}
          />
          <span>
            <Typewriter
              options={{
                strings: [
                  "For Corporate events",
                  "For College events",
                  "For Wedding events",
                ], // Array of strings to cycle through
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <button onClick={()=>registered ? navigate('/enquiry') : navigate('/login')} className="bg-red-500 p-3 rounded-full w-[150px] mx-auto hover:scale-90 duration-300">
          ENQUIRE NOW
        </button>
      </div>
    </>,
    document.getElementById("roots")
  );
};

export default HeroModal;
