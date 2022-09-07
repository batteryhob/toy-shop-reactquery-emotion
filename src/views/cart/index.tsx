import { useQuery } from "@tanstack/react-query";

import CartList from "./components/cartList";

import createClient from "../../dummy/apis";

/*
    카트 뷰
*/
function Cart() {

  const { isLoading, isError, data, error } = useQuery(['cart'], () => {
    return createClient().Cart.getList();
  });

  console.log('cart', data)

  return (
    <section className="cart" aria-label="cart">
      카트
      <CartList/>
    </section>
  );

}
  
export default Cart;
  