import styled from "styled-components";

export const Ul = styled.ul`
  width: 100%;
  padding: 0px;
  margin: 0px;
`
export const Li = styled.li`
  flex-grow: 1;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
`

export const SimpleList = {
  Container: Ul,
  Item: Li
}