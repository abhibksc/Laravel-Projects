import { useNavigate } from "react-router-dom";
import { imge2, imge3, imge4, imge5, imge6, imge7 } from "../../Constants/Img";

const MainSection = () => {
    const navigate = useNavigate();
  return (
    <div className="md:mt-10 flex flex-col mt-10 justify-around ">
      <div
        data-aos="fade-up"
        className="rounded-md max-w-[1100px] py-3 mx-auto shadow-md  focus:border-1 flex justify-between w-full p-2  "
      >
        <div 
  
        className=" text-white  flex flex-col  gap-4   ">
          <div className=" font-bold font-serif lg:text-5xl text-opacity-100 w-full max-w-xl ">
            <span className="text-gray-900">Explore</span> Our New Releases
          </div>

          <button       onClick={()=>navigate("/store")} className="bg-black p-3 rounded-full w-[150px]  hover:scale-90 duration-300">
            Albums
          </button>
        </div>

        <div className="">
          <img
            className="w-[300px]  mx-auto rounded-full  lg:rounded-lg  shadow-xl shadow-black "
            src={imge2}
            alt="img"
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="rounded-md max-w-[1100px] py-3 mx-auto shadow-md gap-5  focus:border-1 flex justify-between w-full p-2  "
      >
        <div className="">
          <img
            className="w-[300px] h-[200px] relative top-2 mx-auto rounded-full  lg:rounded-lg lg:w-[280px] lg:h-[260px] shadow-xl shadow-black "
            src={imge3}
            alt="img"
          />
        </div>

        <div className="mt-20 text-white  flex flex-col  gap-4   ">
          <div className=" font-bold font-serif lg:text-5xl text-opacity-100 w-full max-w-xl ">
            <span className="text-gray-900">Midnight Eternity</span> A Journey
            Through Dreams
          </div>

          <button     
            onClick={()=>navigate("/store/melodic")}
             className="bg-black p-3 rounded-full w-[150px]  hover:scale-90 duration-300">
            Tracks
          </button>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="rounded-md max-w-[1100px] py-3 mx-auto shadow-md  focus:border-1 flex justify-between w-full p-2  "
      >
        <div className="mt-20 text-white  flex flex-col  gap-4   ">
          <div className=" font-bold font-serif lg:text-5xl text-opacity-100 w-full max-w-xl ">
            <span className="text-gray-900">Bestsellers Unite</span> Timeless
            Classics and Modern Hits
          </div>

          <button 

onClick={()=>navigate("/store/classics")}
          
          className="bg-black p-3 rounded-full w-[150px]  hover:scale-90 duration-300">
            Albums
          </button>
        </div>

        <div className="">
          <img
            className="w-[300px] relative top-16 mx-auto rounded-full  lg:rounded-lg lg:w-[300px] shadow-xl shadow-black "
            src={imge4}
            alt="img"
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="rounded-md max-w-[1100px] py-3 mx-auto shadow-md gap-5  focus:border-1 flex justify-between w-full p-2  "
      >
        <div className="">
          <img
            className="w-[300px] relative top-16 mx-auto rounded-full  lg:rounded-lg lg:w-[300px] shadow-xl shadow-black "
            src={imge5}
            alt="img"
          />
        </div>

        <div className="mt-20 text-white  flex flex-col  gap-4   ">
          <div className=" font-bold font-serif lg:text-5xl text-opacity-100 w-full max-w-xl ">
            <span className="text-gray-900">Golden Tune</span> Tracks That
            Define Excellence
          </div>

          <button 
            onClick={()=>navigate("/store/rock")}
          className="bg-black p-3 rounded-full w-[150px]  hover:scale-90 duration-300">
            Tracks
          </button>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="rounded-md max-w-[1100px] gap-4 py-3 mx-auto shadow-md  focus:border-1 flex justify-between w-full p-2  "
      >
        <div className="mt-20 text-white  flex flex-col  gap-4   ">
          <div className=" font-bold font-serif lg:text-5xl text-opacity-100 w-full max-w-xl ">
            <span className="text-gray-900">Flow Dynasty</span>Rap and Hip-Hop
            Chart-Toppers
          </div>

          <button
            onClick={()=>navigate("/store/pop")}
          className="bg-black p-3 rounded-full w-[150px]  hover:scale-90 duration-300">
            Rap & Hip Hop
          </button>
        </div>

        <div className="">
          <img
            className="w-[300px] relative top-16 mx-auto rounded-full  lg:rounded-lg lg:w-[300px] shadow-xl shadow-black "
            src={imge6}
            alt="img"
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="rounded-md max-w-[1100px] gap-4 py-3 mx-auto shadow-md  focus:border-1 flex justify-between w-full p-2  "
      >
        <div className="">
          <img
            className="w-[300px] relative top-16 mx-auto rounded-full  lg:rounded-lg lg:w-[300px] shadow-xl shadow-black "
            src={imge7}
            alt="img"
          />
        </div>

        <div className="mt-20 text-white  flex flex-col  gap-4   ">
          <div className=" font-bold font-serif lg:text-5xl text-opacity-100 w-full max-w-xl ">
            <span className="text-gray-900">Melodic Mastery</span> Top-Selling
            Soundtrack Sensations
          </div>

          <button
            onClick={()=>navigate("/store/rap")}
          className="bg-black p-3 rounded-full w-[150px]  hover:scale-90 duration-300">
            Soundtrack
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
