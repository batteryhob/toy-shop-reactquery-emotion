/** @jsxImportSource @emotion/react */
import CartItem from "./cartIem";

import { productItemType } from "../../../types/products.types";

import { css } from "@emotion/react";

const cartListStyle = css`
    padding: 0px 20px;
    ul{
        display: flex;
        flex-direction: column;
    }
`;

/*
    카트 리스트
*/
interface CartListProps {
    datas?: Array<productItemType>
}
function CartList({ datas } : CartListProps) {

    return (
        <div css={cartListStyle} aria-label="cart-list">
            <ul >
                {
                    datas?.map((data: productItemType, idx: number)=>{
                        return (
                            <CartItem  key={idx} data={data}/>
                        )
                    })
                }
            </ul>
        </div>
    );

  }
  
  export default CartList;
  