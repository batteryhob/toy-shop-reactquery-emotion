import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const container = document.getElementById('root')!;
const root = createRoot(container);

let queryClient = new QueryClient(); //캐시와 훅을 쓸수있게 정의

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
