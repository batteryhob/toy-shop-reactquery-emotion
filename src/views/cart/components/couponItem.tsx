/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { selectCart, toggleCoupon } from "../../../features/cart/cartSlice";
import Checkbox from "../../../shared/checkbox";
import { couponType } from "../../../types/coupons.types";

const couponItemStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;

/*
    카트 리스트
*/
interface CouponItemProps {
  data: couponType;
  id: string;
}
function CouponItem({ data, id }: CouponItemProps) {
  const dispatch = useDispatch();

  const { coupons: applyCoupons } = useAppSelector(selectCart);

  function handleCheck() {
    dispatch(toggleCoupon(data));
  }

  return (
    <li>
      <div css={couponItemStyle}>
        <Checkbox
          id={id}
          propValue={applyCoupons.includes(data)}
          onChange={handleCheck}
        />
        <div>{data.title}</div>
      </div>
    </li>
  );
}

export default CouponItem;
