/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectCartCnt } from "../features/cart/cartSlice";

const headerStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`
const titleWrapper = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    button {
      img {
        height: 30px;
      }
    }
    h1 {
        text-transform: capitalize;
    }
`

const cartDiv = () => css`
  button {
    position: relative;
    i {
      display: inline-block;
      width: 24px;
      height: 24px;
      background-image: url('/imgs/shopping_cart_black_24dp.svg');
      cursor: pointer;
      &:hover {
          filter: invert(86%) sepia(3%) saturate(6%) hue-rotate(322deg) brightness(97%) contrast(86%);
      }
    }
    span {
      position: absolute;
      top: -5px;
      right: -5px;
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: red;
      border-radius: 50%;
      color: white;
      font-size: 8px;
    }
  }
`

/*
    공용 헤더
*/
interface HeaderProps{
    title: string;
    back?: string
}
function Header({ title, back }: HeaderProps ) {

  const navigate = useNavigate();

  const cartCnt = useAppSelector(selectCartCnt);

  function handleClick(){
    navigate("/cart");
  }
  function handleHistoryBack(){
    if(back)
      navigate(back);
  }

  return (
    <>
        <header>
          <div css={headerStyle}>
            <div css={titleWrapper}>
              {
                back &&
                <button onClick={handleHistoryBack}>
                  <img src="/imgs/chevron_left.svg" alt="뒤로가기" />
                </button>
              }  
              <h1>          
                { title }
              </h1>
            </div>
            <div css={cartDiv()}>
              <button onClick={handleClick}>
                <i></i>
                {
                  cartCnt > 0 &&
                  <span>{ cartCnt }</span>
                }                
              </button>              
            </div>
          </div>
        </header>
    </>
  );

}
  
export default Header;
  