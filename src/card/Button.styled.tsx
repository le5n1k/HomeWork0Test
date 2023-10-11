import styled, {css} from "styled-components";
import {myTheme} from "../styles/Theme.styled";

type StyledBtnPropsType = {
    btnType: "primary" | "outlined"
}

export const StyledBtn = styled.button<StyledBtnPropsType> `
  border-radius: 5px;
  height: 30px;
  width: 86px;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 2;
  //margin-right: 12px;
  
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
  
  &+& {
    margin-left: 12px;
  }
  
`