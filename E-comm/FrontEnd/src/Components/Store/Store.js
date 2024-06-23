import { Outlet, useLocation } from "react-router-dom";
import { store_img_1 } from "../../Constants/Img";
import Typewriter from "typewriter-effect";
import { useDispatch, useSelector } from "react-redux";
import {
  updateIdItem,
  addCartzItems,
  updateTotalAmount,
} from "../ReduxStore/Slices/cartz";
import { getStoreData } from "../../CRUD_Operations/Read";
import { useEffect } from "react";
import { addItems } from "../ReduxStore/Slices/publishItems";

const Store = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const show = location.pathname === "/store";

  const songs = useSelector((state) => state.publishItems);
  console.log(songs);
  const cartz_items = useSelector((state) => state.cartzz.items);
  const totalAmount = useSelector((state) => state.cartzz.totalAmount);

  useEffect(() => {
    const fun = async () => {
      const getStoreDataa = await getStoreData();
      console.log(getStoreDataa);

      let arr = [];

      getStoreDataa &&  getStoreDataa.forEach((ele) => {
        const obj = {
          albumDescription: ele.albumDescription,
          albumName: ele.albumName,
          albumPic: `http://localhost:8000/storage/${ele.albumPic}`,
          albumSong: `http://localhost:8000/storage/${ele.albumSong}`,
          id: ele.id,
          price: ele.price,
          type: ele.type,
        };

        arr.push(obj);
      });

      console.log(arr);

      dispatch(addItems(arr));
    };

    fun();
  }, []);

  const handleCart = (id, albumName, albumPic, price) => {
    if (cartz_items.length > 0) {
      const item = cartz_items.find((ele) => ele.id === id);

      if (item) {
        //       // update here

        const newTotalQuantity = Number(item.total_quantity) + 1;
        const newTotalAmount = Number(item.price) * newTotalQuantity;

        const updatedItem = {
          ...item,
          total_quantity: newTotalQuantity,
          total_amount: newTotalAmount,
        };

        dispatch(updateIdItem(updatedItem));

        // Calculate the difference in total amount
        const amountDifference = newTotalAmount - item.total_amount;

        // Update the total amount in the store
        dispatch(updateTotalAmount(totalAmount + amountDifference));
      } else {
        // Add Here

        const newItem = {
          id,
          albumName,
          albumPic,
          price,
          total_quantity: 1,
          total_amount: Number(price),
        };
        dispatch(addCartzItems(newItem));
        dispatch(updateTotalAmount(totalAmount + Number(price)));
      }
    } else {
      // Add Here

      const newItem = {
        id,
        albumName,
        albumPic,
        price,
        total_quantity: 1,
        total_amount: Number(price),
      };
      dispatch(addCartzItems(newItem));
      dispatch(updateTotalAmount(totalAmount + Number(price)));
    }
  };

  return (
    <div className="bg-gradient-to-r from-violet-300 to-secondary">
      {show && (
        <div className="">
          <div>
            <img
              //   data-aos="fade-up"
              className="w-full h-96 object-cover shadow-lg shadow-violet-300"
              src={store_img_1}
              alt=""
            />
            <h1 className="absolute top-40 text-wrap font-customFont p-3 text-white text-xl">
              <Typewriter
                options={{
                  strings: "Exploring worlds through the language of music.",
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>

          <ul className="p-4 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-4/5 mx-auto">
            {songs.length > 0 &&
              songs.map((ele) => (
                <li
                  data-aos="fade-up"
                  key={ele.id}
                  className="flex flex-col items-center gap-4"
                >
                  <div data-aos="fade-up">
                    <h1 className="text-center font-bold text-md">
                      {ele.albumName}
                    </h1>
                    <img
                      className="object-cover rounded-lg shadow-lg shadow-violet-300 w-64 h-44"
                      src={ele.albumPic}
                      alt=""
                    />
                    <div className="flex justify-between p-2">
                      <span>${ele.price}</span>
                      <span
                        className="cursor-pointer shadow-lg"
                        onClick={() =>
                          handleCart(
                            ele.id,
                            ele.albumName,
                            ele.albumPic,
                            ele.price
                          )
                        }
                      >
                        ADD TO CART
                      </span>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
      {!show && <Outlet />}
    </div>
  );
};

export default Store;
