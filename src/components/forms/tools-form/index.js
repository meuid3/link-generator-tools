import { useEffect, useState } from "react"
import { CxColor } from "../../inputs/cx-color"
import { Grid } from "../../layout/grid"
import { copyClipboard } from "../../../utils"
import CopyIcon from "../../../images/icons/link-de-copia.png"
import { Container, Icon, Text } from "./tools-form-components"

export const ToolsForm = () => {

    const [color, setColor] = useState(null)

    useEffect(() => {
        copyClipboard(color)
    }, [color])

    return (
        <Grid.RowStart pl="25px" pt="25px">
            <Container>
                <CxColor changeColor={(e) => setColor(e)}/>
                <Grid.Container ml="25px" mr="25px">
                    <Text>{color}</Text>
                </Grid.Container>
                {color && <Icon src={CopyIcon} onClick={() => copyClipboard(color)}/>}
            </Container>
        </Grid.RowStart>
    )
}