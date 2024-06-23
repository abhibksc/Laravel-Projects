import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginOperation } from "../CRUD_Operations/Create";



const Login = ()=>{

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleForm = (e)=>{

      e.preventDefault();


      if (email && password) {
        const fun = async () => {
          const data = await loginOperation({
            email: email,
            password: password,
          });
          console.log(data);
  
          navigate("/")
        };
  
        fun();
  
  
      }
    }




    return  <div className='loginBlueDiv'>
    
    <div className="loginDiv">

      <form className="loginForm" action="" onSubmit={handleForm}>

        <h1 className="text-3xl text-center rounded-md font-bold mb-10 border-b border-black py-3 md:mb-0">Login</h1>

        <div className="mx-auto flex flex-col gap-10 mb-20 md:mb-0 text-center  ">

          <div className="flex flex-col gap-3 border-b rounded-md">
            <input className="p-2  text-black  focus:border-none focus:outline-none bg-white rounded-md"
                  placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="flex flex-col gap-3 border-b rounded-md">

            <input className="p-2  text-black  focus:border-none focus:outline-none  rounded-md"
                     placeholder="password"

              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button className="sign_up_btn">Login</button>



          <div className="flex flex-col ">

            {/* <button className=" p-3  mx-auto hover:text-blue-400">
              <Link to={"/forget"}>Forget Password?</Link>
            </button> */}


            <button className='hover:text-blue-400'
              onClick={() => {
                  navigate("/signup")
              }}>
              Dont have account, SignUp here.
            </button>
          </div>
        </div>

      </form>

    </div>
  </div>
}

export default Login;