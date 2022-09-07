/** @jsxImportSource @emotion/react */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Products from './views/products';
import Cart from './views/cart';

import appStyle from './assets/appStyle';

function App() {
  return (
    <div css={appStyle}>
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;