import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";

import Products from "./";

test("프로덕트 페이지가 정상적으로 랜더링 된다.", () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <Router>
        <Products />
      </Router>
    </Provider>
  );

  expect(getByLabelText('product-list')).toBeInTheDocument();
});

