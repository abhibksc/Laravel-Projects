import Header from "./Components/Header Component/Header";
import Effects from "../Effects";
import {  Outlet } from "react-router-dom";
import {  useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import { useDispatch } from "react-redux";
import { signUp } from "./Components/ReduxStore/Slices/authSlice";
import { getStoreData } from "./CRUD_Operations/Read";
import { addItems } from "./Components/ReduxStore/Slices/publishItems";




function App() {

  const dispatch = useDispatch();
  



  Effects();

  useEffect(() => {

    const fun = async()=>{

      
    if (localStorage.getItem('CurrentUser')) {
      const data = JSON.parse(localStorage.getItem('CurrentUser'));


      
      dispatch(
        signUp({
          name: data.user.UserName,
          email: data.user.UserEmail,
          userId: data.user.userId,
          registered: true,
          // userToken : data.token
        })
      );
    }

    }

    fun();

    

  }, []);




  return (

    <div>
        <Header />
        <Outlet />
        <Footer/>
    </div>
  );
}



export default App;















