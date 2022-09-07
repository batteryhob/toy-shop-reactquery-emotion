import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import ProductList from "./components/productList";

import createClient from "../../dummy/apis";
/*
    프로덕트 뷰
*/
function Products() {

    const [ page, setPage ] = useState<number>(0);

    const { isLoading, isError, data, error } = useQuery(['products', page], () => {
      return createClient().Products.getList();
    });

    console.log('products', data)

    return (
      <section className="products">
        <div>
          프로덕트
        </div>
        <ProductList/>
      </section>
    );

  }
  
  export default Products;
  