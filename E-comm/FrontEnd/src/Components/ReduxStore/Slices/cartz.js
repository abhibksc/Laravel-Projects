import { createSlice } from '@reduxjs/toolkit';

const cartz = createSlice({
  name: 'cartz',
  initialState: {
    items : [],
    show : false,
    totalAmount : 0
  },
  reducers: {
    addCartzItems(state, action) {
      console.log(action);
      state.items.unshift(action.payload);
    },
    updateIdItem(state, action) {
        console.log(action);
        const { albumName, albumPic, id,price ,total_amount,total_quantity} = action.payload;
        const item = state.items.find((item) => item.id === id);
        if (item) {
          item.albumName = albumName;
          item.albumPic = albumPic;
          item.price = price;
          item.total_quantity = total_quantity;
          item.total_amount = total_amount;
        }
      },

      updateTotalAmount(state, action) {
        console.log(action);
        state.totalAmount = action.payload
      },


    deleteItems(state, action) {
        const idToDelete = action.payload;
        state.items = state.items.filter(item => item.id !== idToDelete);

      },
    show(state, action) {
      state.show = action.payload;
      },
   
  }
});

export const { addCartzItems,show,updateIdItem,updateTotalAmount ,deleteItems} = cartz.actions;
export const cartzz =  cartz.reducer;
