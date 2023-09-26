import styled from "styled-components";

export const ItemList = styled.div`
  display: flex;
  justify-content: flex-start;
  width: ${props => props.width ?? '80px'};
`