import { useState } from "react";
import styled from "styled-components";
import Aberto from "../../../images/icons/aberto.png"
import Fechado from "../../../images/icons/fechado.png"

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
`
export const Input = styled.input`
  width: 100%;
  height: 20px;
  font-size: 18px;
  background: none;
  padding-left: 10px;
  padding-right: 5px;
  color: #fff;
  border-style: none;
  outline: none;
  cursor: pointer;
`
export const FieldSet = styled.fieldset`
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  cursor: pointer;
  width: ${props => props.width ?? '200px'};
  border-color: ${props => props.active ? '#06E8B9' : '#fff'};
`
export const Legend = styled.legend`
  margin-left: 5px;
`
export const FieldContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`
export const Ul = styled.ul`
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  width: 100%;
  padding: 0px;
  padding-top: 10px;
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #113350;
  z-index: 999999;
`
export const Li = styled.li`
  flex-grow: 1;
  text-decoration: none;
  list-style: none;
  margin: 0px;
  padding-left: 25px;
  padding-bottom: 5px;
  padding-top: 5px;
  transition: 0.1s ease-in;
  ${props => props.active ? 'background-color: rgba(255, 255, 255, 0.4)' : ''};

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`
export const Value = styled.div`
  flex-grow: 1;
  font-size: 18px;
  margin-left: 10px;
  margin-right: 10px;
`
export const Icon = styled.img`
  width: 15px;
  height: 12px;
  cursor: pointer;
`

export const CxSelect = ({label, callback, items, width}) => {

  const [selected, setSelectec] = useState(items[0])
  const [showList, setShowList] = useState(false)

  return (
    <InputContainer>
      <FieldSet 
        active={showList} 
        onClick={() => {
          setShowList(!showList)
        }}
        width={width}
      >
        <Legend style={{marginLeft: 15}}>{label}</Legend>
        <FieldContainer>
          <Value>{selected.nome}</Value>
          <Icon 
            src={showList ? Aberto : Fechado} 
            onClick={() => setShowList(!showList)}
          />
        </FieldContainer>
      </FieldSet>
      {
        showList && (
        <Ul>
          {
            items?.map((item, index) => {
              return (
                <Li 
                  active={item.nome === selected.nome}
                  key={index} 
                  onClick={() => {
                    setSelectec(item)
                    callback(item)
                    setShowList(false)
                  }}
                >
                  {item.nome}
                </Li>
              )
            })
          }
        </Ul>
        )
      }
    </InputContainer>
  )
}
