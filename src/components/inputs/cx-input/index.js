import styled from "styled-components";

export const Input = styled.input`
  width:${props => props.width ?? '200px'};
  height: 20px;
  font-size: 18px;
  background: none;
  padding-left: 10px;
  color: #fff;
  border-style: none;
  outline: none;
`
export const FieldSet = styled.fieldset`
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
`
export const Legend = styled.legend`
  margin-left: 5px;
`
export const CxInput = ({label, placeholder, type, setState, state, width}) => {
  return (
    <FieldSet>
      <Legend style={{marginLeft: 15}}>{label}</Legend>
      <Input 
        type={type} 
        placeholder={placeholder} 
        onChange={(e) => setState(e.target.value)}
        defaultValue={state ?? ''}
        width={width}
      />
    </FieldSet>
  )
}
