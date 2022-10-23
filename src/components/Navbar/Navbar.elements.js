import styled from "styled-components";
import { COLORS } from "../../globalStyles";
import { mobile, phone } from "../../utils/responsive";

export const Container = styled.div`
  height: 60px;
  border-bottom: 3px transparent solid;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${phone({ padding: "10px 0px" })}
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${phone({ display: "none" })}
`;
export const SearchContainer = styled.div`
  border: 0.5px solid lightGrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
export const Input = styled.input`
  border: none;
  ${phone({ width: "50px" })}
`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
  ${phone({ fontSize: "24px" })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${phone({ flex: 2, justifyContent: "center" })}
  ${mobile({ marginRight: "50px" })}
`;
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${phone({ fontSize: "12px", marginLeft: "10px" })}
  &:hover {
    border-bottom: ${COLORS.primary} 3px solid;
  }
`;

export const Categories = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 100vh;
    position: absolute;
    top: 90px;
    left: ${({ click }) => (click ? 0 : "-250%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: white;
    z-index: 1000;
  }
`;

export const MobileMenuWrapper = styled.div``;

export const MobileIcon = styled.div`
  display: none;
  z-index: 2000;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
