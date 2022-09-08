import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";

import Cart from "./";
import { toggleCart } from "../../features/cart/cartSlice";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
let queryClient = new QueryClient();

test("추가된 아이템이 정상적으로 랜더링 된다, 삭제 시 아이템이 삭제된다.", async () => {

  //장바구니 아이템 추가
  store.dispatch(toggleCart({
    item_no: 363559,
    item_name: "WOOD GLOVES",
    detail_image_url: "https://img.29cm.co.kr/next-product/2019/04/25/4fe7eda3069d4cdb867636faf36ad5a3_20190425135058.jpg?width=500",
    price: 3000,
    score: 220
  }));

  const { getByLabelText, getByRole } = render(  
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Cart/>
        </Router>        
      </QueryClientProvider>
    </Provider>
  );

  expect(getByLabelText('cart-view')).toBeInTheDocument();
  expect(getByLabelText('cart-item')).toBeInTheDocument();

  //장바구니 삭제
  const btn_delete = getByRole('button', { name: 'cart-item-delete' });
  await fireEvent.click(btn_delete);
  expect(getByLabelText('cart-empty')).toBeInTheDocument();

});
