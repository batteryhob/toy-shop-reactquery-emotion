/** @jsxImportSource @emotion/react */
import Header from "../../shared/header";
import CartList from "./components/cartList";

import cartSection from "../../assets/cartSection";
import CouponList from "./components/couponList";
import {
  selectCart,
  selectCouponApplyPrice,
} from "../../features/cart/cartSlice";
import { useAppSelector } from "../../app/hooks";
import { addComma } from "../../utils/textUtils";
import { css } from "@emotion/react";

const payStyle = (isAdded: boolean ) => css`
  position: absolute;
  bottom: 0px;
  margin-bottom: -74px;
  width: 100%;
  padding: 25px 0px;
  background-color: black;
  text-align: center;
  font-size: 20px;
  color: rgb(255, 72, 0);
  transition: margin-bottom .2s ease;
  ${isAdded ?
      `margin-bottom: 0px;`    
      :            
      `margin-bottom: -74px;`
  }
`;

const empty = css`
  height: 300px;
  line-height: 300px;
  text-align: center;
`;
/*
    카트 뷰
*/
function Cart() {
  const { datas: cartList } = useAppSelector(selectCart);
  const finalPrice: number = useAppSelector(selectCouponApplyPrice);

  return (
    <>
      <Header title="cart" back={"/products"} />
      <section css={cartSection} aria-label="cart-view">
        {cartList.length > 0 ? (
          <>
            <CartList />
            <CouponList />            
          </>
        ) : (
          <div css={empty} aria-label={`cart-empty`}>
            장바구니가 비었습니다.
          </div>
        )}
        <div css={payStyle(cartList.length > 0)}>{`${addComma(finalPrice)}원 결제하기`}</div>
      </section>
    </>
  );
}

export default Cart;
