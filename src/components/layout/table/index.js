import styled from "styled-components";

export const Table = styled.div`
  border-style: solid;
  border-radius: 10px;
  height: 220px;
  overflow-y: scroll;
  border-color: rgba(255,255,255, 0.5);
  margin-top: ${props => props.mt ?? '0px'};
  margin-left: ${props => props.ml ?? '0px'};
  margin-right: ${props => props.mr ?? '0px'};
  margin-bottom: ${props => props.mb ?? '0px'};
`