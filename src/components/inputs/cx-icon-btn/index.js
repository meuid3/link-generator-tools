import styled from "styled-components";

export const Container = styled.div`
  width: ${props => props.width ?? '40px'};
  height:${props => props.height ?? '40px'};
  margin: ${props => props.margin ?? '10px'};
  border-radius: 10px;
  background: ${props => props.active ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  ${props => props.border ? 'border-style: solid' : null};
  ${props => props.border ? ' border-width: 1px' : null};
  ${props => props.border ? ' border-color: #fff' : null};

  &:hover {
    background: rgba(255,255,255,0.4);
  }

  &:active {
    background: rgba(255,255,255,0.6);
  }
`
export const Icon = styled.img`
  width: 25px;
  height: 25px;
`
export const Text = styled.div`
  font-size: 18px;
  color: #fff;
`

export const CxIconBtn = ({image, onClick, text, border, width, height, margin, active, title}) => {
  return (
    <Container 
      title={title}
      onClick={onClick} 
      border={(!image && text) || border}
      width={width}
      height={height}
      margin={margin}
      active={active}
    >
      {
        image && !text ? (
          <Icon src={image}/>
        ) : (
          <Text>{text}</Text>
        )
      }
      
    </Container>
  )
}