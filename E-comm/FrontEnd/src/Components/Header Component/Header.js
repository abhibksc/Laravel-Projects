// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../ReduxStore/Slices/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { show } from "../ReduxStore/Slices/cartz";
import Cart from "../Cartz/Cartz";

const Header = () => {
  const registered = useSelector((state) => state.authSlice.registered);
  const name = useSelector((state) => state.authSlice.name);
  const cartzz = useSelector((state) => state.cartzz.items);
  const showss = useSelector((state) => state.cartzz.show);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (registered) {
      localStorage.clear();
      dispatch(signOut());
      navigate("/login");
    } else if (!registered) {
      navigate("/login");
    }
  };
  return (
    <nav>
      {/* for Laptop */}

      <div className="  fixed  left-0 right-0 z-10 text-white   p-4  flex justify-between items-center bg-transparent shadow-md shadow-black w-full  lg:h-20  backdrop-blur-sm backdrop-filter  flex-wrap">
        <span className="ml-6 lg:text-4xl">
          🎧 <span className=" font-bold underline">Generics</span>
        </span>

        <div className="hidden md:block mr-[150px]">
          <ul className="flex gap-5  ">
            <li className="hover:border-b active:scale-95">
              <Link to={"/"}>HOME</Link>
            </li>
            <li className="hover:border-b active:scale-95">
              <Link to={"/store"}>STORE</Link>
            </li>
            <li className="hover:border-b active:scale-95">
              <Link to={"/sellalbum"}>SELL YOUR MUSIC</Link>
            </li>
            <li className="hover:border-b active:scale-95">
              <Link to={"/organiseevent"}>EVENT</Link>
            </li>
          </ul>
        </div>

        {cartzz.length > 0 && (
          <div className="flex" onClick={()=>dispatch(show(true))}>
            <span>
              <FontAwesomeIcon className="w-8 h-8" icon={faShoppingCart} />
            </span>

            <span className=" hidden relative right-4 top-5 sm:block rounded-xl border px-2 h-6 w-6 bg-blue-400">
              {cartzz.length}
            </span>
          </div>
        )}

        {
          showss && <Cart/>

        }

        <div className="flex flex-col text-center">
          {registered && (
            <span
              className="mr-10 active:scale-95 font-bold cursor-pointer "
              onClick={handleLogin}
            >
              {name}
            </span>
          )}
          <span
            className="mr-10 active:scale-95 cursor-pointer"
            onClick={handleLogin}
          >
            {registered ? `Logout` : "Login/signup"}
          </span>
        </div>
      </div>

      {/* for mobile */}

      <div
        className="md:hidden fixed z-20 top-16 left-16 px-3 py-1 bg-transparent rounded-md shadow-lg font-bold"
        style={{ color: "#ffffff" }}
        path="/"
      >
        <ul className="flex gap-4 ">
          {/* sm:w-[300px] group-hover:w-[500px] transition-all rounded border  */}
          <li className="hover:border-b active:scale-95">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="hover:border-b active:scale-95">
            <Link to={"/store"}>STORE</Link>
          </li>
          <li className="hover:border-b active:scale-95">
            <Link to={"/sellalbum"}>SELL</Link>
          </li>
          <li className="hover:border-b active:scale-95">
            <Link to={"/organiseevent"}>EVENT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
