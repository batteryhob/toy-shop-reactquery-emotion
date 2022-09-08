/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { couponType } from "../../../types/coupons.types";
import createClient from "../../../dummy/apis";
import { useQuery } from "@tanstack/react-query";
import CouponItem from "./couponItem";

const couponListStyle = css`
  padding: 0px 20px;
  h2 {
      margin-bottom: 12px;
  }
  ul {
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;
    border-bottom: 1px solid rgb(0, 0, 0);
  }    
`;

/*
    카트 리스트
*/
function CouponList() {
  const { isSuccess, data: coupons } = useQuery<Array<couponType>>(
    ["coupons"],
    () => {
      return createClient().Coupons.getList();
    }
  );

  return (
    <div css={couponListStyle} aria-label="cart-list">
      <h2>Coupons</h2>
      <ul>
        {coupons?.map((data: couponType, idx: number) => {
          return <CouponItem key={idx} id={`coupon_${idx}`} data={data} />;
        })}
      </ul>
    </div>
  );
}

export default CouponList;
