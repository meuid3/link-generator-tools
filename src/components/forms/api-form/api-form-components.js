import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 25px;
`

export const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonAdd = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export const Icon = styled.img`
  width: 32px;
`
export const LinkPreview = styled.div`
  height: 100%;
  font-size: 18px;
  color: #fff;
`
export const LinkPreviewContainer = styled.div`
  width: 90%;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LinkPreviewLabel = styled.div`
  font-size: 10px;
  color: #fff;
  font-weight: 700;
`

export const Actions = styled.img`
  width: 22px;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`

export const ActionsLink = styled.a`
  text-decoration: none;
`

export const FlexContainerRow = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const FlexContainerColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const FlexContainerRowCenter = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const TypeAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 5px;
  background-color: rgba(255,255,255, 0.2);
  margin-right: 10px;
  cursor: pointer;
`
export const TypeImage = styled.img`
  width: 22px;
`

export const TitleContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`