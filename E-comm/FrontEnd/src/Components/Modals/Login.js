// import ReactDOM from 'react-dom';

// import { useContext, useState} from 'react';
// import ReactDOM from 'react-dom';
// import { Navigate, useNavigate } from 'react-router-dom';


// export const LoginModal = ()=>{

//     const navigate = useNavigate();

//     const [Email, setEmail] = useState("");
//     const [pass, setPass] = useState("");


//     const handleForm = ()=>{

//     }




//     return ReactDOM.createPortal(<>
//         <div className='loginBlueDiv'>
    
//           <div className="loginDiv">
    
//             <form className="loginForm" action="" onSubmit={handleForm}>
    
//               <h1 className="text-3xl text-center font-bold mb-5 md:mb-0">Login</h1>
    
//               <div className="mx-auto flex flex-col gap-10 mb-20 md:mb-0 text-center  ">
    
//                 <div className="flex flex-col gap-3">
//                   <label className="font-bold text-4" htmlFor="">Email</label>
//                   <input className="p-2 text-black  rounded"
//                     type="email"
//                     value={Email}
//                     onChange={(e) => setEmail(e.target.value)} />
//                 </div>
    
//                 <div className="flex flex-col gap-3">
//                   <label className="font-bold text-4" htmlFor="">Password</label>
//                   <input className="p-2 text-black rounded"
//                     type="password"
//                     value={pass}
//                     onChange={(e) => setPass(e.target.value)} />
//                 </div>
    
//                 <button className="sign_up_btn">Login</button>
    
    
    
//                 <div className="flex flex-col ">
    
//                   {/* <button className=" p-3  mx-auto hover:text-blue-400">
//                     <Link to={"/forget"}>Forget Password?</Link>
//                   </button> */}
    
    
//                   <button className='hover:text-blue-400'
//                     onClick={() => {
//                         navigate("/signup")
//                     }}>
//                     Dont have account, SignUp here.
//                   </button>
//                 </div>
//               </div>
    
//             </form>
    
//           </div>
//         </div>
//       </>, document.getElementById('roots'));
// }