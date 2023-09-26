import { useEffect, useState } from "react";
import styled from "styled-components";
import Colour from "../../../images/icons/colour.png"

export const HiddenInput = styled.input`
    display: none;
`;
export const ColorPicker = styled.div`
    width: 50px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    background-color: ${props => props.bg ?? '#fff'};
`
export const Label = styled.label`
    cursor: pointer;
`
export const Icon = styled.img`
    width: 22px;
`

export const CxColor = ({changeColor}) => {

    const [color, setColor] = useState(null)

    useEffect(() => {
        changeColor(color)
    }, [color])

    return (
        <Label for="color-picker">
            <ColorPicker bg={color}>
                <Icon src={Colour}/>
            </ColorPicker>
            <HiddenInput 
                type="color" 
                name="color-picker" 
                id="color-picker"
                onChange={(e) => setColor(e.target.value)}
            />
        </Label>
    )
}