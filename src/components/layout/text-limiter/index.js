import styled from "styled-components"

export const TextLimiter = styled.div`
  width: ${props => props.width ?? '100%'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`