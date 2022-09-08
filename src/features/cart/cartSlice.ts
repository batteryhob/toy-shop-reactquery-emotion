import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { cartItemType } from "../../types/carts.types";
import { couponType } from "../../types/coupons.types";
import { productItemType } from "../../types/products.types";

export interface CartState {
  datas: Array<cartItemType>;
  coupons: Array<couponType>;
}

const initialState: CartState = {
  datas: [],
  coupons: [],
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
        //장바구니에 있음
        state.datas.splice(findIdx, 1);
      } else {
        //장바구니에 없음, 장바구니는 3개까지 가능
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
    toggleCoupon: (state, action: PayloadAction<couponType>) => {

        const findIdx = state.coupons.findIndex((data: couponType)=>{
          return data.type === action.payload.type
        });
  
        if (findIdx > -1) {
          //적용 O
          state.coupons.splice(findIdx, 1);
        } else {
          //적용 X
          state.coupons.push(action.payload);
        }
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

export const { toggleCart, toggleCheck, toggleCoupon, increment, decrement } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export const selectCartCnt = (state: RootState) => state.cart.datas.length;
//총 상품 가격
export const selectComputedPrice =  (state: RootState) => {  
  const computedPrice: number = state.cart.datas.filter((data: cartItemType)=> data.checked).reduce((prev: any, current: any) => {
    return prev + (current.product.price * current.amount);
   } , 0);
  return computedPrice;
}
//쿠폰 적용 가격
export const selectCouponApplyPrice =  (state: RootState) => {  
  let computedPrice: number = state.cart.datas.filter((data: cartItemType)=> data.checked).reduce((prev: any, current: any) => {

    let currentPrice: number = current.product.price;
    const available : boolean = current.product.availableCoupon === undefined ? true : current.product.availableCoupon;

    //정율 쿠폰 계산
    if(available){
      const rateCoupons = state.cart.coupons.filter((coupon: couponType)=>{
        return coupon.type === 'rate'
      });
      if(rateCoupons.length > 0){
        rateCoupons.forEach((coupon: couponType)=>{
          if(coupon.discountRate)
            currentPrice = currentPrice * ((100 - coupon.discountRate) / 100)
        })
      }
    }

    return prev + (currentPrice * current.amount);
   } , 0);

  //정액 쿠폰 계산
  const available : boolean = state.cart.datas.filter((data: cartItemType)=> data.checked).filter((data: cartItemType)=>{
    return data.product.availableCoupon === undefined ? true : data.product.availableCoupon;
  }).length > 0;

  if(available){
    const amountCoupons = state.cart.coupons.filter((coupon: couponType)=>{
      return coupon.type === 'amount'
    });
    if(amountCoupons.length > 0){
      amountCoupons.forEach((coupon: couponType)=>{
        if(coupon.discountAmount)
          computedPrice = computedPrice - coupon.discountAmount;
      })
    }
  }

  if(computedPrice < 0)
    return 0;
  
  return computedPrice;
}

export default cartSlice.reducer;
