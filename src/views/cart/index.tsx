/** @jsxImportSource @emotion/react */
import Header from "../../shared/header";
import CartList from "./components/cartList";

import cartSection from "../../assets/cartSection";
import CouponList from "./components/couponList";
import { useAppSelector } from "../../app/hooks";
import { selectComputedPrice } from "../../features/cart/cartSlice";
import { addComma } from "../../utils/textUtils";

/*
    카트 뷰
*/
function Cart() {

  const computedPrice: number = useAppSelector(selectComputedPrice);

  return (
    <>
      <Header title="cart" back={"/products"}/>
      <section css={cartSection} aria-label="cart-view">
        <CartList />
        <div>
          상품 금액 { addComma(computedPrice) }
        </div>
        <div>
          <div>
            적용 가능한 쿠폰 리스트
          </div>
          <CouponList />
        </div>
        <div>
          최종 결재 금액
        </div>
      </section>
    </>
  );

}
  
export default Cart;
  