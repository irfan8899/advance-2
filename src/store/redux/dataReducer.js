import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsData: [],
  cartData: [],
  loginData: null,
  registerData: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setProductsData: (state, action) => {
      state.productsData = action.payload;
    },
    setCartData: (state, action) => {
      state.cartData = action.payload;
    },
    setLoginData: (state, action) => {
      state.loginData = action.payload;
    },
    setRegisterData: (state, action) => {
      state.registerData = action.payload;
    },
  },
});

export const { setProductsData, setCartData, setLoginData, setRegisterData } = dataSlice.actions;

export default dataSlice.reducer;
