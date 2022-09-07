/** @jsxImportSource @emotion/react */
import ProductItem from "./productItem";

import { productItemType } from "../../../types/products.types";

import { css } from "@emotion/react";

const productListStyle = css`
    width: 100%;
    ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }
`;

/*
    프로덕트 리스트
*/
interface ProductListProps {
    datas?: Array<productItemType>
}
function ProductList({ datas }: ProductListProps) {
    return (
        <div css={productListStyle} aria-label="product-list">
            <ul >
                {
                    datas?.map((data: productItemType, idx: number)=>{
                        return (
                            <ProductItem  key={idx} data={data}/>
                        )
                    })
                }
            </ul>
        </div>
    );
  }
  
  export default ProductList;
  