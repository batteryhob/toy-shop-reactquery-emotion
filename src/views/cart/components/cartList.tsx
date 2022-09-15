/** @jsxImportSource @emotion/react */
import CartItem from "./cartIem";

import { css } from "@emotion/react";
import {
  selectCart,
  selectComputedPrice,
} from "../../../features/cart/cartSlice";
import { useAppSelector } from "../../../app/hooks";
import { cartItemType } from "../../../types/carts.types";
import { addComma } from "../../../utils/textUtils";

const cartListStyle = css`
  padding: 0px 20px;
  ul {
    display: flex;
    flex-direction: column;
  }
`;

const priceStyle = css`
  padding: 12px 0px;
  text-align: right;
`;

/*
    카트 리스트
*/
function CartList() {
  const { datas: cartList } = useAppSelector(selectCart);
  const computedPrice: number = useAppSelector(selectComputedPrice);

  return (
    <div css={cartListStyle} aria-label="cart-list">
      <ul>
        {cartList?.map((data: cartItemType, idx: number) => {
          return <CartItem key={idx} data={data} />;
        })}
      </ul>
      <div css={priceStyle}>
        {`총 상품 금액 : ${addComma(computedPrice)}원`}
      </div>
    </div>
  );
}

export default CartList;
