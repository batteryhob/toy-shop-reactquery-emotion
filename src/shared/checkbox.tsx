/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface CheckboxProps {
  id: string | number;
  propValue: boolean;
  onChange: (value: boolean) => void;
}

const checkboxStyle = css`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 3px;
  input[type="checkbox"] {
    display: none;
    + label {
      box-sizing: border-box;
      position: absolute;
      width: 20px;
      height: 20px;
      left: 0px;
      top: 0px;
      cursor: pointer;
      background-color: transparent;
      border: 1px solid rgb(0, 0, 0);
      img {
        width: 100%;
        height: 100%;
      }
    }
    &:checked + label {
      border: none;
      background-color: blue;
      cursor: pointer;
      img {
        filter: invert(100%) sepia(0%) saturate(7475%) hue-rotate(129deg) brightness(98%) contrast(90%);
      }
    }
  }
`;

function Checkbox({ id, propValue, onChange }: CheckboxProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.checked;
    onChange(value);
  } 

  const propId = String(id);

  return (
    <div css={checkboxStyle}>
      <input
        type="checkbox"
        id={propId}
        checked={propValue}
        onChange={handleChange}
      />
      <label htmlFor={propId}>
        <img src="/imgs/check.svg" alt="체크" />
      </label>
    </div>
  );
}

export default Checkbox;
