import styled, {css} from "styled-components";
import {myTheme} from "../styles/Theme.styled";

type StyledBtnPropsType = {
    btnType: "primary" | "outlined",
}

export const StyledBtn = styled.button<StyledBtnPropsType> `
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 19px;
  height: 30px;
  width: 86px;
  flex-shrink: 0;
  
  &:last-child {
    margin-left: 12px;
  }
  
  font-family: Inter,sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 200% */
  
  ${props => props.btnType === "primary" && css<StyledBtnPropsType> `
    border: 0;
    background-color: ${myTheme.colors.btnColor};
    color:#FFF;
  `}
  ${props => props.btnType === "outlined" && css<StyledBtnPropsType> `
    border: 2px solid ${myTheme.colors.btnColor};
    background-color: transparent;
    color:${myTheme.colors.btnColor};
  `}
  
`