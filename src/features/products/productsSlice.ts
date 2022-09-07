import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ProductsState {
  datas: Array<any>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductsState = {
  datas: [],
  status: 'idle',
};


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initDatas: (state) => {
      state.datas = [];
    },
  }
});

export const { initDatas } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.datas;

export default productsSlice.reducer;
