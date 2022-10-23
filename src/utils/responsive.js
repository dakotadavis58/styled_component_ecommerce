import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 960px) {
      ${props}
    }
  `;
};
export const phone = (props) => {
  return css`
    @media only screen and (max-width: 450px) {
      ${props}
    }
  `;
};
