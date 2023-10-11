import styled from "styled-components";

export const Box = styled.div`
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  height: 100vh;
`