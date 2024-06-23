import { createSlice } from '@reduxjs/toolkit';

const PublishedItemSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    addItems(state, action) {
      console.log(action);
      return action.payload;
      // state.unshift(action.payload);
    },
   
  }
});

export const { addItems } = PublishedItemSlice.actions;
export const published =  PublishedItemSlice.reducer;
