import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    name: '',
    email: '',
    userId: '',
    registered: false,
    userToken : ''
  },
  // m?
  reducers: {
    signUp(state, action) {
      console.log(action);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
      state.registered = action.payload.registered;
    },
    signIn(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
      state.registered = action.payload.registered;
    },
    signOut(state) {
      state.name = '';
      state.email = '';
      state.userId = '';
      state.registered = false;
      localStorage.clear();
    }
  }
});

export const { signUp, signIn, signOut } = dataSlice.actions;
export const auth =  dataSlice.reducer;
