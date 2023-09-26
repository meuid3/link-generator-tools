import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const Text = styled.span`
    color: ${props => props.color ?? '#fff'};
    font-size: 28px;
`
export const Icon = styled.img`
    width: 32px;
`