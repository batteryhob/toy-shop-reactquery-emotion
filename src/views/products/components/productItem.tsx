/** @jsxImportSource @emotion/react */
import { productItemType } from "../../../types/products.types";

import { css } from "@emotion/react";

import { addComma } from "../../../utils/textUtils";
import { toggleCart, selectCart } from "../../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { cartItemType } from "../../../types/carts.types";

const productItemStyle = css`
    width: calc(50% - 1px);
    display: flex;
    flex-direction: column;
`;

const thumbnail = css`
    position: relative;
    overflow: hidden;    
    padding-top: 100%;
    img {
        width: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
    }
`;

const content = css`
    display: flex;
    flex-direction: row;
    padding: 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
`;

const contentDesc = css`
    flex: 1;
    margin-right: 12px;
    min-height: 54px;
     h3 {
        margin-bottom: 12px;
        font-weight: 300;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    strong {        
        font-weight: 700;
    }
`

const contentIcon = (isAdded: boolean ) => css`
    display: flex;
    align-items: center;
    button {
        i {
            display: inline-block;
            width: 24px;
            height: 24px;
            ${isAdded ?
                `background-image: url('/imgs/remove_shopping_cart_black_24dp.svg');`    
                :            
                `background-image: url('/imgs/add_shopping_cart_black_24dp.svg');`
            }
            &:hover {
                filter: invert(86%) sepia(3%) saturate(6%) hue-rotate(322deg) brightness(97%) contrast(86%);
            }
        }
    }
`

/*
    프로덕트 아이템
*/
interface ProductItemProp {
    data: productItemType
}
function ProductItem({ data }: ProductItemProp) {

    const dispatch = useDispatch();

    const { datas: cartList }  = useAppSelector(selectCart);

    function handleClick(item: any){
        if(cartList.length === 3){
            if(window.confirm("장바구니에는 최대 3개까지 담을 수 있습니다.\n[확인]을 누르시면 가장 오래된 아이템이 장바구니에서 삭제됩니다.")){
                dispatch(toggleCart(item));
            }
        }else{
            dispatch(toggleCart(item));
        }        
    }

    const included: boolean = cartList.findIndex((cart: cartItemType)=>{
        return cart.product.item_no === data.item_no;
    }) > -1 ? true : false; 

    return (
        <li css={productItemStyle}>
            <div css={thumbnail}>
                <img src={data.detail_image_url} alt={data.item_name} />
            </div>
            <div css={content}>
                <div css={contentDesc}>
                    <h3>{data.item_name}</h3>
                    <strong>{`${addComma(data.price)}원`}</strong>
                </div>
                <div css={contentIcon(included)}>
                    <button onClick={()=> handleClick(data)}>
                        <i></i>
                    </button>                   
                </div>
            </div>
        </li>
    );
}

export default ProductItem;
  