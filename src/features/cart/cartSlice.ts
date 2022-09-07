import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CartState {
  datas: Array<any>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CartState = {
  datas: [],
  status: 'idle',
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initDatas: (state) => {
      state.datas = [];
    },
  }
});

export const { initDatas } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.datas;

export default cartSlice.reducer;
