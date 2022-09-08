/** @jsxImportSource @emotion/react */
import CartItem from "./cartIem";

import { css } from "@emotion/react";
import { selectCart } from "../../../features/cart/cartSlice";
import { useAppSelector } from "../../../app/hooks";
import { cartItemType } from "../../../types/carts.types";

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
function CartList() {

    const { datas: cartList }  = useAppSelector(selectCart);

    return (
        <div css={cartListStyle} aria-label="cart-list">
            <ul >
                {
                    cartList?.map((data: cartItemType, idx: number)=>{
                        return (
                            <CartItem key={idx} data={data} />
                        )
                    })
                }
            </ul>
        </div>
    );

  }
  
  export default CartList;
  