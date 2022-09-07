import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { productItemType } from "../../types/products.types";

export interface CartState {
  datas: Array<any>;
}

const initialState: CartState = {
  datas: []
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<productItemType>) => {
      state.datas.push(action.payload);
    },
    removeCart: (state, action: PayloadAction<productItemType>) => {
      
    },
    initDatas: (state) => {
      state.datas = [];
    },
  }
});

export const { addCart, removeCart, initDatas } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export const selectCartCnt = (state: RootState) => state.cart.datas.length;

export default cartSlice.reducer;
