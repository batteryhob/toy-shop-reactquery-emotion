/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Checkbox from "../../../shared/checkbox";
import { couponType } from "../../../types/coupons.types";

const couponItemStyle = css`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

/*
    카트 리스트
*/
interface CouponItemProps {
    data: couponType;
    id: string;
}
function CouponItem({data, id} : CouponItemProps) {

    function handleCheck(){

    }
    
    return (
        <li>
            <div css={couponItemStyle}>
                <Checkbox
                    id={id}
                    propValue={false}
                    onChange={handleCheck}
                />
                <div>
                    { data.title }
                </div>                
            </div>
        </li>
    );

  }
  
  export default CouponItem;
  