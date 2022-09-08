import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";

import Products from "./";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
let queryClient = new QueryClient();

test("프로덕트 페이지가 정상적으로 랜더링 된다.", () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Products/>
        </Router>        
      </QueryClientProvider>
    </Provider>
  );

  expect(getByLabelText('product-list')).toBeInTheDocument();
});

