import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ItemContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TabItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  border-style: ${props => props.active && 'solid'};
  border-color: ${props => props.active && '#fff'};
  border-width: ${props => props.active && '1px'};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export const TabBody = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-style: solid;
  border-width: 1px;
  color: #fff;
  overflow-y: scroll;
  overflow-x: hidden;
`;