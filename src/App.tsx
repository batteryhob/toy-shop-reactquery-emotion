import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Products from './views/products';
import Cart from './views/cart';

function App() {
  return (
    <div className="App">
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