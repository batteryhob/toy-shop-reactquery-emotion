/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { addComma } from "../../../utils/textUtils";
import { toggleCart, toggleCheck, increment, decrement } from "../../../features/cart/cartSlice";
import Checkbox from "../../../shared/checkbox";
import { cartItemType } from "../../../types/carts.types";
import { useDispatch } from "react-redux";

const cartItemStyle = css`
  padding: 38px 0px 15px;
  border-bottom: 1px solid rgb(0, 0, 0);
`;

const cartItemWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const action = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  button {
    font-size: 12px;
    padding: 0px 12px;
    border: 1px solid rgb(0, 0, 0);
  }
`;

const title = css`
  flex: 1;
  margin-right: 20px;
  h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  }
  span {
    font-size: 13px;
    line-height: 22px;
  }
`;

const thumbnail = css`
  img {
    width: 76px;
    height: 76px;
  }
`;

const amount = css`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  button {
    width: 30px;
    height: 30px;
    border: 1px solid rgb(0, 0, 0); 
  }
  span {
    display: inline-block;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    border-width: 1px 0px 1px 0px;
    border-style: solid;
    border-color: rgb(0, 0, 0);
    text-align: center;
    line-height: 30px;
  }
`;

const badge = css`
  display: inline-block;
  padding: 0px 4px;
  margin-bottom: 3px;
  background-color: black;
  color: white;
  border-radius: 2px;
`

/*
    카트 아이템
*/
interface CartItemProp {
  data: cartItemType;
}
function CartItem({ data }: CartItemProp) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(toggleCart(data.product));
  }
  function handleCheck() {
    dispatch(toggleCheck(data.product));
  }

  return (
    <li css={cartItemStyle}>
      <div css={action}>
        <div>
          <Checkbox
            id={data.product.item_no}
            propValue={data.checked}
            onChange={handleCheck}
          />
        </div>
        <div>
          <button onClick={handleClick}>삭제</button>
        </div>
      </div>
      <div css={cartItemWrapper}>
        <div css={title}>
          {
            data.product.availableCoupon == false &&
            <span css={badge}>쿠폰적용불가</span>
          }          
          <h3>{data.product.item_name}</h3>
          <span>{`${addComma(data.product.price)}원`}</span>
          <div css={amount}>
            <button onClick={() => dispatch(decrement(data.product))}>-</button>
            <span>{data.amount}</span>
            <button onClick={() => dispatch(increment(data.product))}>+</button>
          </div>
        </div>
        <div css={thumbnail}>
          <img
            src={data.product.detail_image_url}
            alt={data.product.item_name}
          />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
