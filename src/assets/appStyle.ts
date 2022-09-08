import { css } from '@emotion/react'

const appStyle = css`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    position: relative;
    width: 100%;
    min-width: 375px;
    max-width: 640px;
  }
  section {
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 375px;
    max-width: 640px;
  }
`;

export default appStyle;