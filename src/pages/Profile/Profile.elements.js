import { COLORS } from "../../globalStyles";

const { default: styled } = require("styled-components");

export const Container = styled.div`
  height: 80vh;
  width: 100%;
  justify-content: center;
  display: flex;
  @media only screen and (max-width: 960px) {
    height: 100vh;
  }
`;
export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 1vh;
`;

export const Form = styled.form`
  background-color: ${COLORS.lightColor};
  width: 60vw;
  height: 80vh;
  margin-right: auto;
  margin-left: auto;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  margin: 8px 0;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
  @media only screen and (max-width: 960px) {
    height: 100vh;
  }
`;
export const FormField = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: 60%;
  & > input {
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    width: 100%;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
    @media only screen and (max-width: 960px) {
      min-height: 22px;
      font-size: 16px;
    }
  }
`;
export const Error = styled.div`
  color: red;
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const CardInfo = styled.h2``;
export const ProfilePic = styled.h2``;
export const EditButton = styled.h2``;
export const PhoneNumber = styled.h2``;
