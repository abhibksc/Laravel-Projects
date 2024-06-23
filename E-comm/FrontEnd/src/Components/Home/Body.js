import {
  imge1,
  imge2,
  imge3,
  imge4,
  imge5,
  imge6,
  imge7,
} from "../../Constants/Img";
import Typewriter from "typewriter-effect";
import HeroModal from "./HeroModal";
import MainSection from "./MainSection";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";

const Body = () => {
  const navigate = useNavigate();

  const registered = useSelector((state) => state.authSlice.registered);
  console.log(registered);

  return (
    <main className="bg-gradient-to-r from-primary to-secondary border m-0  ">
      <div className="">
        <img
          className="h-screen object-cover w-full  overflow-hidden shadow-xl   shadow-secondary  rounded-lg "
          src={imge1}
          alt=""
        />
      </div>

      <HeroModal />

      <Element name="mainSection">
        <MainSection />
      </Element>

      <div
        data-aos="fade-up"
        className="mt-5  w-[350px] text-center mx-auto p-3 mb-10 lg:w-[700px] shadow-lg shadow-red-950"
      >
        <span className="text-center  text-3xl font-bold "> Tour</span>
        <ul className="text-left mt-10 flex flex-col gap-3 mx-auto text-white">
          <li className="flex flex-row justify-between">
            <div className="  lg:flex flex-row justify-between gap-16 ">
              <span>JUL16</span>
              <br />
              <span>DETROIT,MI</span>
              <br />
              <span>DTE ENERGY MUSIC THEATRE</span>
              <br />
            </div>
            <button className="w-[100px] font-bold text-gray-300">
              Buy Tickets
            </button>
          </li>
          <hr />
          <li className="flex flex-row justify-between">
            <div className="  lg:flex flex-row justify-between gap-16">
              <span>JUL16</span>
              <br />
              <span>DETROIT,MI</span>
              <br />
              <span>DTE ENERGY MUSIC THEATRE</span>
              <br />
            </div>
            <button className="w-[100px] font-bold text-gray-300">
              Buy Tickets
            </button>
          </li>
          <hr />
          <li className="flex flex-row justify-between">
            <div className="  lg:flex flex-row justify-between gap-16 ">
              <span>JUL16</span>
              <br />
              <span>DETROIT,MI</span>
              <br />
              <span>DTE ENERGY MUSIC THEATRE</span>
              <br />
            </div>
            <button className="w-[100px] font-bold text-gray-300">
              Buy Tickets
            </button>
          </li>
          <hr />
          <li className="flex flex-row justify-between">
            <div className="  lg:flex flex-row justify-between gap-16 ">
              <span>JUL16</span>
              <br />
              <span>DETROIT,MI</span>
              <br />
              <span>DTE ENERGY MUSIC THEATRE</span>
              <br />
            </div>
            <button className="w-[100px] font-bold text-gray-300">
              Buy Tickets
            </button>
          </li>
          <hr />
          <li className="flex flex-row justify-between">
            <div className="  lg:flex flex-row justify-between gap-16 ">
              <span>JUL16</span>
              <br />
              <span>DETROIT,MI</span>
              <br />
              <span>DTE ENERGY MUSIC THEATRE</span>
              <br />
            </div>
            <button className="w-[100px] font-bold text-gray-300">
              Buy Tickets
            </button>
          </li>
          <hr />
          <li className="flex flex-row justify-between">
            <div className="  lg:flex flex-row justify-between gap-16 ">
              <span>JUL16</span>
              <br />
              <span>DETROIT,MI</span>
              <br />
              <span>DTE ENERGY MUSIC THEATRE</span>
              <br />
            </div>
            <button className="w-[100px] font-bold text-gray-300">
              Buy Tickets
            </button>
          </li>
        </ul>
      </div>

      {/* condtion */}

      {!registered && (
        <div className="flex flex-col  w-72 mx-auto mb-3 text-center font-semibold">
          <span>See personalized recommendations</span>
          <button
            onClick={() => navigate("/login")}
            className="border rounded-lg bg-black  p-1 text-white hover:text-blue-500  hover:scale-90 duration-300"
          >
            Sign in
          </button>
          <span>
            New Customer?{" "}
            <button onClick={() => navigate("/signup")}>Start Here</button>
          </span>
        </div>
      )}
    </main>
  );
};

export default Body;
