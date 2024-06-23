import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupOperation } from "../CRUD_Operations/Create";
import { useDispatch } from "react-redux";
import { signUp } from "./ReduxStore/Slices/authSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    if (name && email && password) {



      const fun = async () => {
        const data = await signupOperation({
          userName: name,
          email: email,
          password: password,
        });
        console.log(data);

        // dispatch(
        //   signUp({
        //     name: data.name,
        //     email: data.email,
        //     userId: data.id,
        //     registered: true,
        //   })
        // );


        navigate("/")
      };

      fun();


    }
  };

  return (
    <div className="loginBlueDiv">
      <div className="loginDiv">
        <form
          className="rounded-md shadow-md  shadow-black bg-white text-black border w-80  p-3 flex flex-col justify-between   "
          action=""
          onSubmit={handleForm}
        >
          <h1 className="text-3xl text-center rounded-md font-bold mb-10 border-b border-black py-3 md:mb-0">
            SignUp
          </h1>

          <div className=" flex flex-col text-center gap-5 mb-20 md:mb-0 md:mt-5  ">
            <div className="flex flex-col gap-1 border-b rounded-md">
              <input
                className="p-2 rounded-md text-center text-black  focus:border-none focus:outline-none "
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1 border-b rounded-md">
              <input
                className="p-2 rounded-md text-center text-black  focus:border-none focus:outline-none "
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1 border-b rounded-md">
              <input
                className="p-2 rounded-md text-black text-center focus:border-none focus:outline-none  "
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="sign_up_btn mt-3">SignUp</button>

            <div className="flex flex-col ">
              {/* <button className=" p-3  mx-auto hover:text-blue-400">
              <Link to={"/forget"}>Forget Password?</Link>
            </button> */}

              <button
                className="hover:text-blue-400"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Go Back To Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
