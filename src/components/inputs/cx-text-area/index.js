import { useRef } from "react";
import styled from "styled-components";


export const Text = styled.textarea`
  width: 100%;
  min-height: 100px;
  flex-grow: 1;
  background: #113350;
  font-size: 22px;
  color: #fff;
  padding: 15px;
`

export const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.input`
  width: 100%;
  height: 60px;
  background: none;
  color: #fff;
  font-size: 28px;
  border-style: none;
  border-color: #fff;
  outline: none;
  padding-left: 25px;
`

export const TextArea = (props) => {

  const textareaRef = useRef(null);

  const handleTabKeyPress = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();

      const { value, selectionStart, selectionEnd } = textareaRef.current;
      const newValue =
        value.substring(0, selectionStart) +
        '\t' +
        value.substring(selectionEnd);
      textareaRef.current.value = newValue;
      textareaRef.current.selectionStart = textareaRef.current.selectionEnd =
        selectionStart + 1;
    }
  };


  return (

    <Container>
      <Header><Title type="text"/></Header>
      <Text  
        ref={textareaRef} // Ref para acessar o elemento textarea
        onKeyDown={handleTabKeyPress} 
      />
    </Container>
  )
}