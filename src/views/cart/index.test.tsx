import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";

import Cart from "./";

test("카트 페이지가 정상적으로 랜더링 된다.", () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <Router>
        <Cart />
      </Router>
    </Provider>
  );

  expect(getByLabelText('cart-view')).toBeInTheDocument();
});

