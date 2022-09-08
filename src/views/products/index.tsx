/** @jsxImportSource @emotion/react */
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

import ProductList from "./components/productList";

import createClient from "../../dummy/apis";
import { productItemType } from "../../types/products.types";

import productSection from "../../assets/productSection";
import Header from "../../shared/header";

/*
    프로덕트 뷰
*/
function Products() {
  const [page, setPage] = useState<number>(1);
  const [computedList, setComputedList] = useState<Array<productItemType>>([]);

  const { isSuccess, data: products } = useQuery<Array<productItemType>>(
    ["products", page],
    () => {
      return createClient().Products.getList(page);
    }
  );

  const target = useRef<HTMLDivElement>(null);
  
  //새로운 product가 추가될 때,
  useEffect(()=>{
    if(products && products.length > 0){
      setComputedList([
        ...computedList,
        ...products
      ])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[products]);

  //computedList가 변경될 때,
  useEffect(()=>{
    const observer = new IntersectionObserver(intersect, { threshold: 1});
    if(target.current)
      observer.observe(target.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[computedList]);

  const intersect = async ([entry]: any, observer: { unobserve: (arg0: any) => void; observe: (arg0: any) => void; }) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      loadMore();
    }
  };

  function loadMore() {
    setPage(page + 1);
  }

  return (
    <>
      <Header title="products" />
      <section css={productSection} aria-label="product-view">
        <ProductList datas={computedList} />
        {
          isSuccess &&
          <div ref={target}></div>
        }        
      </section>      
    </>
  );
}

export default Products;
