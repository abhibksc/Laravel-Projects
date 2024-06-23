import { useState } from "react";
import { LoginModal } from "../Modals/Login";
import { Link, useNavigate } from "react-router-dom";



const Login = ()=>{
    const [btnNameReact, setBtnNameReact] = useState("Login 😒");
    const navigate = useNavigate();

    return <div className="  relative lg:right-16 top-3  h-8 max-h-8 w-20 max-w-34 text-center  hover:👋" >
        <button
            
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login 😒'
                ? setBtnNameReact('Logout 😊')
                : setBtnNameReact('Login 😒');
              console.log(btnNameReact);
              navigate("/login")

            }}
          >
            {btnNameReact}
          </button>


    </div>
}

export default Login;