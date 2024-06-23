import { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItems, show, updateIdItem, updateTotalAmount } from '../ReduxStore/Slices/cartz';

const Cart = () => {

    const dispatch = useDispatch();



    // const {setBill, Cart_Count,Bill, setCartItems, setCart_Count, CartItems, setArr, arr, showCart, setShowCart} = useContext(Context);

    const cartzz = useSelector((state) => state.cartzz.items);
    const totalAmount = useSelector((state) => state.cartzz.totalAmount);


    const handleminus = (e, itemsId) => {
        console.log(e);
        console.log(itemsId);

        e.preventDefault();

        console.log("chalaa");
        const items = cartzz.find((ele)=>ele.id === itemsId);
        console.log(items);

        if(items.total_quantity > 1){

    

            const newTotalQuantity = Number(items.total_quantity) - 1;
        const newTotalAmount = Number(items.price) * newTotalQuantity;

        const updatedItem = {
          ...items,
          total_quantity: newTotalQuantity,
          total_amount: newTotalAmount,
        };

    

        dispatch(
          updateIdItem(updatedItem)
        );


          // Calculate the difference in total amount
          const amountDifference = newTotalAmount - items.total_amount;

    



  // Update the total amount in the store
  dispatch(updateTotalAmount(totalAmount + amountDifference));







            // dispatch(updateTotalAmount(totalbill))

            // dispatch(deleteItems(itemsId))






        }
        else{

            let totalbill = totalAmount - items.price;

            dispatch(updateTotalAmount(totalbill))

            dispatch(deleteItems(itemsId))



        }








        // if (items.total_quantity >= 1) {



        //     items.total_amount = items.total_amount - 1;

        //     items.total_amount = totalAmount - items.price


        //     // setBill(items.total);
            

        //     // const obj = {
        //     //     item: items.item,
        //     //     description: items.description,
        //     //     price: items.price,
        //     //     prices : items.prices,
        //     //     id: items.id,
        //     //     amount: items.amount,
        //     //     total: items.total
        //     // }

        //     // setArr([...arr, obj])
        //     // setCart_Count(Cart_Count - 1)
        // }
        // if(items.amount === 0){
        //     // let filter = CartItems.filter((eve)=>eve.id !== items.id);
        //     // setCartItems(filter);
        //     console.log("0 hai");

        // }
    }

    const handlePlus = (e, itemsId) => {
        console.log(e);
        console.log(itemsId);
        e.preventDefault();
        console.log("Plus clicked");
        const items = cartzz.find((ele) => ele.id === itemsId);
        console.log(items);
    
        if (items) {
          const newTotalQuantity = Number(items.total_quantity) + 1;
          const newTotalAmount = Number(items.price) * newTotalQuantity;
    
          const updatedItem = {
            ...items,
            total_quantity: newTotalQuantity,
            total_amount: newTotalAmount,
          };
    
          dispatch(updateIdItem(updatedItem));
    
          // Calculate the difference in total amount
          const amountDifference = newTotalAmount - items.total_amount;
          dispatch(updateTotalAmount(totalAmount + amountDifference));
        }
      };








    return  ReactDOM.createPortal(
        <>
            <div className='fixed z-10 inset-0 bg-black opacity-90'>
                <div className="w-72 md:w-96 mx-auto flex flex-col mt-40 p-2  rounded-lg  text-black bg-slate-50 shadow-lg border-2">


                    <ul className='border-b-2 '>
                        {

cartzz.map((items) => {
                                return <li key={items.id}>
                                    <div className='rounded-md flex flex-row justify-between p-2'>
                                        <div className='flex flex-col gap-2'>
                                            <h1 className='font-bold'>{items.albumName}</h1>
                                            <div className='flex gap-7 font-bold'>
                                                <p>{items.price}</p>
                                                <p className='rounded-lg border px-2'>{"X" + items.total_quantity}</p>
                                            </div>
                                        </div>

                                        <div className='flex gap-2 my-5 font-bold'>
                                            <button
                                                onClick={(e) => handleminus(e, items.id)}
                                                className='rounded-lg border-amber-400 border hover:bg-amber-800 hover:text-white text-center w-screen max-w-10 h-full max-h-6'>-</button>
                                            <button
                                                onClick={(e) => handlePlus(e, items.id)}
                                                className='rounded-lg border-amber-400 border hover:bg-amber-800 hover:text-white w-screen max-w-10 h-full max-h-6'>+</button>
                                        </div>
                                    </div>
                                </li>
                            })

                        }
                    </ul>


                    <div className="flex justify-between p-2">
                        <span className='font-bold'>Total Amount</span>
                        <span className='font-bold'>{totalAmount}</span>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button type='number' className='rounded-full border border-amber-800 text-red-900 hover:bg-amber-800 hover:text-white px-2' 
                       onClick={()=>dispatch(show(false))}
                        >Close</button>
                        <button className='rounded-full border border-amber-800 text-red-900 hover:bg-amber-800 hover:text-white px-2' onClick={()=>(alert("Successfully ordered!"))}>Order</button>
                    </div>
                </div>
            </div>
        </>,

        document.getElementById('root')

    );
}


export default Cart;


