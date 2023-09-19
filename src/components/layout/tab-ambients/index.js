import { useState } from "react"
import { Container, Icon, ItemContainer, TabBody, TabItem } from "./tab-ambients-components"
import ApiImage from "../../../images/icons/api.png"
import WebImage from "../../../images/icons/front-end.png"


export const TabAmbientesComponent = ({items, children}) => {

  const [ativeTab, setActiveTab] = useState(0);

  const getImage = (image) => {
    if (image === "api.png") return ApiImage
    if (image === "front-end.png") return WebImage
  }

  return (
    <Container>
      <ItemContainer>
        {
          items.map((item, index) => {
            return (
              <TabItem onClick={()=> setActiveTab(index)}>
                <Icon src={getImage(item.icon)}/>{item.nome}
              </TabItem>
            )
          })
        }
      </ItemContainer>
      <TabBody>
        {children[ativeTab] ?? 'Sem especificação'}
      </TabBody>
    </Container>
  )
}