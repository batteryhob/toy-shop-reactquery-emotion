/** @jsxImportSource @emotion/react */
import { useAppSelector } from "../../app/hooks";
import { selectCart } from "../../features/cart/cartSlice";

import Header from "../../shared/header";
import CartList from "./components/cartList";

import cartSection from "../../assets/cartSection";

/*
    카트 뷰
*/
function Cart() {

  const { datas: cartItems } = useAppSelector(selectCart);

  return (
    <>
      <Header title="cart"/>
      <section css={cartSection} aria-label="cart-view">
        <CartList datas={cartItems}/>       
      </section>
    </>
  );

}
  
export default Cart;
  