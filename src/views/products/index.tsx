/** @jsxImportSource @emotion/react */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import ProductList from "./components/productList";

import createClient from "../../dummy/apis";
import { productItemType } from "../../types/products.types";

import productSection from "../../assets/productSection";
import Header from "../../shared/header";

/*
    프로덕트 뷰
*/
function Products() {

    const [ page, setPage ] = useState<number>(0);

    const { isLoading, data: products } = useQuery<Array<productItemType>>(['products', page], () => {
      return createClient().Products.getList(page);
    });

    return (
      <>
        <Header title="products"/>
        <section css={productSection} aria-label="product-view">
          {
            isLoading ?
            <>loadding...</>
            : <ProductList datas={products}/>
          }          
        </section>
      </>
    );

  }
  
  export default Products;
  