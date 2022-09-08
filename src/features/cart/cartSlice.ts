import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { cartItemType } from "../../types/carts.types";
import { productItemType } from "../../types/products.types";

export interface CartState {
  datas: Array<cartItemType>;
}

const initialState: CartState = {
  datas: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, action: PayloadAction<productItemType>) => {
      const findIdx = state.datas.findIndex((data: cartItemType) => {
        return data.product.item_no === action.payload.item_no;
      });

      if (findIdx > -1) {
        //장바구니에 없음
        state.datas.splice(findIdx, 1);
      } else {
        //장바구니에 있음, 장바구니는 3개까지 가능
        if (state.datas.length >= 3) {
          state.datas.shift();
          state.datas.push({
            product: action.payload,
            checked: false,
            amount: 1,
          });
        } else {
          state.datas.push({
            product: action.payload,
            checked: false,
            amount: 1,
          });
        }
      }
    },
    toggleCheck: (state, action: PayloadAction<productItemType>) => {
      const findIdx = state.datas.findIndex((data: cartItemType) => {
        return data.product.item_no === action.payload.item_no;
      });

      state.datas[findIdx].checked = !state.datas[findIdx].checked;
    },
    increment: (state, action: PayloadAction<productItemType>) => {
      const findIdx = state.datas.findIndex((data: cartItemType) => {
        return data.product.item_no === action.payload.item_no;
      });

      if(state.datas[findIdx].amount < 10){
        state.datas[findIdx].amount += 1;
      }      
    },
    decrement: (state, action: PayloadAction<productItemType>) => {
      const findIdx = state.datas.findIndex((data: cartItemType) => {
        return data.product.item_no === action.payload.item_no;
      });

      if(state.datas[findIdx].amount > 1){
        state.datas[findIdx].amount -= 1;
      }      
    },
  },
});

export const { toggleCart, toggleCheck, increment, decrement } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export const selectCartCnt = (state: RootState) => state.cart.datas.length;
export const selectComputedPrice =  (state: RootState) => {
  
  const computedPrice: number = state.cart.datas.reduce((prev: any, current: any) => {
    return prev + (current.product.price * current.amount);
   } , 0);

  return computedPrice;
}

export default cartSlice.reducer;
