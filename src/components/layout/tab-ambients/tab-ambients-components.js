import styled from "styled-components";

export const Container = styled.div`
  margin-top: 25px;
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
`
export const Icon = styled.img`
  width: 50px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
` 

export const TabBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  padding-left: 25px;
`;