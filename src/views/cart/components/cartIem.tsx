/** @jsxImportSource @emotion/react */
import { productItemType } from "../../../types/products.types";

import { css } from "@emotion/react";
import { addComma } from "../../../utils/textUtils";

const cartItemStyle = css`
    padding: 38px 0px 15px;
    border-bottom: 1px solid rgb(0, 0, 0);
`;

const cartItemWrapper = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

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

/*
    카트 아이템
*/
interface ProductItemProp {
    data: productItemType
}
function CartItem({ data }: ProductItemProp) {

    return (
        <li css={cartItemStyle}>
            <div css={cartItemWrapper}>
                <div css={title}>
                    <h3>{data.item_name}</h3>
                    <span>{`${addComma(data.price)}원`}</span>
                </div>
                <div css={thumbnail}>
                    <img src={data.detail_image_url} alt={data.item_name} />
                </div>                 
            </div>
        </li>
    );

  }
  
  export default CartItem;
  